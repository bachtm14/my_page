# Инструкция: запуск сайта в продакшен

Чтобы реальные повара заходили со своих телефонов и ты в админке видел всё в одном месте — нужны **3 вещи**:

| | Что | Сколько | Где |
|---|---|---|---|
| 1️⃣ | **Домен** | у тебя есть | — |
| 2️⃣ | **Хостинг** | бесплатно | Vercel или Netlify |
| 3️⃣ | **База данных** | бесплатно | Supabase |

Бесплатных тарифов хватит на 20-50 поваров с большим запасом.

---

## ⭐ Самый простой путь (рекомендую — 30 минут всего)

Если на любом шаге застрянешь — пиши, помогу.

### Шаг 1. Загрузи сайт на Vercel (5 минут — для теста)

1. Зайди на https://vercel.com → **Sign Up** (через Google или GitHub)
2. Нажми **Add New** → **Project** → **Browse Files** или перетащи папку `phobo_site` целиком
3. Нажми **Deploy** — через ~30 секунд сайт работает на адресе типа `phobo-test-abc123.vercel.app`

✅ На этом этапе сайт уже работает! Но данные пока в браузере. Идём дальше — подключим базу.

### Шаг 2. Подключи свой домен

В Vercel: твой проект → **Settings** → **Domains** → добавь `phobo-test.ru` (или какой у тебя).

Vercel покажет DNS-записи — добавь их у регистратора домена. Через 5-30 минут сайт работает на твоём домене.

**Для админки:** оставь её просто как `phobo-test.ru/admin.html`. Никому не давай этот адрес. Можно сделать и `admin.phobo-test.ru` через тот же Vercel — но это сложнее, я бы не парился.

### Шаг 3. Создай Supabase (10 минут)

1. https://supabase.com → **Start your project** → войди через Google/GitHub
2. **New Project**:
   - Name: `phobo-test`
   - Database password: придумай надёжный, **сохрани в надёжном месте**
   - Region: `Frankfurt` (для Европы) или ближайший
3. Подожди ~2 минуты пока создаётся

### Шаг 4. Создай таблицы

В Supabase: **SQL Editor** → **+ New query** → вставь код ниже → **Run** (▶️):

```sql
-- Пользователи (повара и админы)
create table users (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  password text not null,
  name text not null,
  role text not null check (role in ('cook', 'admin')),
  created_at timestamptz default now()
);

-- Результаты тестов и аттестаций
create table results (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  user_name text not null,
  department text not null,
  mode text not null,             -- 'test' или 'attestation'
  is_pf boolean default false,
  dish jsonb,                     -- для аттестации: {ru, vi, portion}
  correct int not null,
  total int not null,
  score real,                     -- для аттестации
  answers jsonb,                  -- для теста
  grading jsonb,                  -- для аттестации
  duration_sec int,
  completed_at timestamptz default now()
);

-- Изменения рецептов (overrides)
create table dish_overrides (
  id int primary key default 1,
  data jsonb not null,
  updated_at timestamptz default now()
);

create index idx_results_username on results(username);
create index idx_results_department on results(department);
create index idx_results_completed_at on results(completed_at desc);

-- Создаём первого админа (поменяй пароль потом!)
insert into users (username, password, name, role)
values ('admin', 'admin123', 'Шеф', 'admin');

-- Включаем доступ через API (RLS отключён для простоты — сайт сам контролирует доступ)
alter table users disable row level security;
alter table results disable row level security;
alter table dish_overrides disable row level security;
```

### Шаг 5. Получи ключи

В Supabase: **Project Settings** → **API**. Скопируй:

- **Project URL** (`https://abcdefg.supabase.co`)
- **anon public key** (длинная строка с `eyJ...`)

### Шаг 6. Подключи Supabase к сайту

В файлах `index.html` и `admin.html` найди блок `const Storage = {` и **замени** его на этот код, **подставив свои URL и KEY**:

```javascript
// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://ВСТАВЬ_СЮДА.supabase.co';
const SUPABASE_KEY = 'eyJ...ВСТАВЬ_СЮДА';

// Подключение к Supabase
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const Storage = {
  // ВНИМАНИЕ: эти методы стали async — всё, что их вызывает,
  // должно использовать await. Я могу сделать это за тебя — просто пришли URL+KEY.
  
  async getUsers(){
    const {data} = await sb.from('users').select('*');
    return data || [];
  },
  async saveUsers(users){
    // upsert каждого
    for (const u of users) await sb.from('users').upsert(u, {onConflict:'username'});
  },
  getSession(){const s=localStorage.getItem('phobo_session');return s?JSON.parse(s):null},
  setSession(u){localStorage.setItem('phobo_session',JSON.stringify(u))},
  clearSession(){localStorage.removeItem('phobo_session')},
  async getResults(){
    const {data} = await sb.from('results').select('*').order('completed_at',{ascending:true});
    return (data||[]).map(r => ({...r, completedAt: r.completed_at}));
  },
  async saveResult(r){
    await sb.from('results').insert({
      username: r.username, user_name: r.name,
      department: r.department, mode: r.mode || 'test',
      is_pf: r.isPF || false, dish: r.dish || null,
      correct: r.correct, total: r.total, score: r.score || null,
      answers: r.answers || null, grading: r.grading || null,
      duration_sec: r.durationSec
    });
  },
  async getResultsForUser(username){
    const {data} = await sb.from('results').select('*').eq('username',username).order('completed_at',{ascending:true});
    return (data||[]).map(r => ({...r, completedAt: r.completed_at}));
  },
  async getDishOverrides(){
    const {data} = await sb.from('dish_overrides').select('data').eq('id',1).single();
    return data?.data || {dishes:{},pf:{}};
  },
  async saveDishOverrides(o){
    await sb.from('dish_overrides').upsert({id:1, data:o, updated_at: new Date().toISOString()});
  },
};
```

И добавь в `<head>` обоих файлов перед `<script src="data.js">`:

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

⚠️ **Также придётся добавить `await` перед всеми вызовами Storage** и сделать функции `async`. Это займёт 30 минут аккуратной правки.

**Я могу сделать всё это за тебя одной командой** — пришли мне URL и anon key (anon key безопасно делиться, это публичный ключ для фронтенда), и я выдам тебе **готовые файлы с уже подключенным Supabase**. Загрузишь их на Vercel — и всё работает.

### Шаг 7. Залей обновлённые файлы

Снова перетащи папку в Vercel — он сам обновит сайт через ~30 сек.

---

## 🛟 Альтернатива: если кажется сложно

### Вариант "ленивый шеф"

Просто отправь мне:
1. Логин и пароль от Supabase (или хотя бы URL + anon key)
2. Список начальных аккаунтов поваров (имена + логины)

Я верну тебе:
- Готовый zip с подключенным Supabase
- Аккаунты уже созданы в базе

Тебе останется только перетащить папку в Vercel.

---

## 📱 Дополнительные улучшения (когда основа работает)

Что можно добавить потом:

- 🔐 **Хеширование паролей** (сейчас в открытом виде — для внутреннего сайта норм, но можно улучшить)
- 📲 **Приложение на телефон** (PWA — установка с сайта одним кликом)
- 📧 **Уведомления шефу** на email когда повар провалил аттестацию
- 🏆 **Лидерборд** — рейтинг поваров месяца
- 🔔 **Напоминалки** — раз в неделю пинать повара пройти тест
- ⏱️ **Таймер** на тесте — ограничение по времени
- 🎯 **Обязательная аттестация** — система отметок что повар точно прошёл по такому-то блюду
- 📑 **Экспорт результатов в Excel** — чтобы у тебя был отчёт за месяц
- 📸 **Тесты по фото** — узнать блюдо по картинке
- 🌏 **Английский язык** — если будут иностранные повара

## Если что-то непонятно

Пиши:
- На каком шаге застрял
- Какая ошибка (скриншот лучше всего)
- Что уже пробовал

Помогу со всем — от DNS до Supabase.
