// data.js – полная база знаний PhoBo
const DISHES = {
  "Супы": [
    {"ru":"Суп Фо Бо","vi":"Phở Bò","portion":"800","photo":"","ingredients":[
      {"ru":"Лапша Фо свежая","vi":"Phở tươi","grams":"150"},
      {"ru":"Говядина окорок","vi":"Mông bò","grams":"50"},
      {"ru":"Говядина голень отварная","vi":"Bắp bò luộc","grams":"30"},
      {"ru":"Зелень для Фо","vi":"Hành phở","grams":"25"},
      {"ru":"Бульон Фо","vi":"Nước dùng phở","grams":"500"},
      {"ru":"Перец черный","vi":"Hạt tiêu xay","grams":"0.5"},
      {"ru":"Ростки бобов","vi":"Giá đỗ","grams":"15"},
      {"ru":"Лайм","vi":"Chanh xanh","grams":"15"},
      {"ru":"Имбирь","vi":"Gừng","grams":"2"},
      {"ru":"Кинза","vi":"Rau mùi","grams":"1"},
      {"ru":"Мята","vi":"Bạc Hà","grams":"1"},
      {"ru":"Перец острый","vi":"Ớt cay","grams":"2"},
      {"ru":"Зам Той","vi":"Giấm tỏi","grams":"10"},
      {"ru":"Соус Лаоганма","vi":"Nước sốt Laoganma","grams":"5"},
      {"ru":"Соус Шрирача","vi":"Tương ớt Sriracha","grams":"5"}
    ]},
    {"ru":"Суп Фо Га","vi":"Phở Gà","portion":"800","photo":"","ingredients":[
      {"ru":"Лапша Фо свежая","vi":"Phở tươi","grams":"150"},
      {"ru":"Куриное бедро жареное","vi":"Đùi gà xào","grams":"100"},
      {"ru":"Зелень для Фо","vi":"Hành phở","grams":"25"},
      {"ru":"Бульон Фо","vi":"Nước dùng phở","grams":"500"},
      {"ru":"Перец черный","vi":"Hạt tiêu xay","grams":"0.5"},
      {"ru":"Ростки бобов","vi":"Giá đỗ","grams":"15"},
      {"ru":"Лайм","vi":"Chanh xanh","grams":"15"},
      {"ru":"Кинза","vi":"Rau mùi","grams":"1"},
      {"ru":"Мята","vi":"Bạc Hà","grams":"1"},
      {"ru":"Перец острый","vi":"Ớt cay","grams":"2"},
      {"ru":"Зам Той","vi":"Giấm tỏi","grams":"10"},
      {"ru":"Соус Лаоганма","vi":"Nước sốt Laoganma","grams":"5"},
      {"ru":"Соус Шрирача","vi":"Tương ớt Sriracha","grams":"5"}
    ]},
    {"ru":"Суп Фо Тай Лан","vi":"Phở Tái Lăn","portion":"800","photo":"","ingredients":[
      {"ru":"Лапша Фо свежая","vi":"Phở tươi","grams":"150"},
      {"ru":"Масло растительное","vi":"Dầu thực vật","grams":"10"},
      {"ru":"Говядина Фо Тай Лан","vi":"Bò Tái Lăn","grams":"100"},
      {"ru":"Зелень для Фо","vi":"Hành phở","grams":"25"},
      {"ru":"Бульон Фо","vi":"Nước dùng phở","grams":"500"},
      {"ru":"Перец черный","vi":"Hạt tiêu xay","grams":"0.5"},
      {"ru":"Ростки бобов","vi":"Giá đỗ","grams":"15"},
      {"ru":"Лайм","vi":"Chanh xanh","grams":"15"},
      {"ru":"Имбирь","vi":"Gừng","grams":"2"},
      {"ru":"Кинза","vi":"Rau mùi","grams":"1"},
      {"ru":"Мята","vi":"Bạc Hà","grams":"1"},
      {"ru":"Перец острый","vi":"Ớt cay","grams":"2"},
      {"ru":"Зам Той","vi":"Giấm tỏi","grams":"10"},
      {"ru":"Соус Лаоганма","vi":"Nước sốt Laoganma","grams":"5"},
      {"ru":"Соус Шрирача","vi":"Tương ớt Sriracha","grams":"5"}
    ]}
  ],
  "Горячее": [
    {"ru":"Лапша Мьен Сао Бо","vi":"Miến Xào Bò","portion":"400","photo":"","ingredients":[
      {"ru":"Масло растительное","vi":"Dầu thực vật","grams":"20"},
      {"ru":"Яйцо куриное","vi":"Trứng gà","grams":"1 шт"},
      {"ru":"Лапша Мьен","vi":"Miến Việt Nam","grams":"130"},
      {"ru":"Говядина окорок обжаренный","vi":"Mông bò xào","grams":"50"},
      {"ru":"Овощи для горячего","vi":"Rau xào","grams":"90"},
      {"ru":"Соус Соевый","vi":"Xì dầu","grams":"5"},
      {"ru":"Соус Сот Сао","vi":"Sốt xào","grams":"50"},
      {"ru":"Масло красное","vi":"Dầu điều đỏ","grams":"10"},
      {"ru":"Ростки бобов","vi":"Giá đỗ","grams":"30"},
      {"ru":"Лук зеленый","vi":"Hành lá","grams":"10"},
      {"ru":"Кунжут","vi":"Vừng","grams":"2"},
      {"ru":"Перец черный","vi":"Hạt tiêu xay","grams":"0.5"}
    ]}
  ],
  "Салаты": [
    {"ru":"Салат Ном Бо","vi":"Nộm Bò","portion":"240","photo":"","ingredients":[
      {"ru":"Огурцы без семян","vi":"Dưa chuột bỏ ruột","grams":"50"},
      {"ru":"Помидоры без семян","vi":"Cà chua không ruột","grams":"40"},
      {"ru":"Морковь","vi":"Cà Rốt","grams":"15"},
      {"ru":"Лук красный","vi":"Hành Tím","grams":"15"},
      {"ru":"Ростки бобов","vi":"Giá đỗ","grams":"20"},
      {"ru":"Кинза","vi":"Rau mùi","grams":"3"},
      {"ru":"Говядина окорок обжаренный","vi":"Mông bò xào","grams":"40"},
      {"ru":"Соус Кисло-сладкий для салата","vi":"Nước sốt chua ngọt cho salad","grams":"50"},
      {"ru":"Арахис жареный","vi":"Lạc Rang","grams":"10"},
      {"ru":"Лук жареный","vi":"Hành khô","grams":"5"}
    ]}
  ],
  "Закуски": [
    {"ru":"Нэм Га","vi":"Nem Gà","portion":"3 шт/160/30","photo":"","ingredients":[
      {"ru":"Рисовая бумага квадратная","vi":"Bánh tráng nem vuông","grams":"30 (3шт)"},
      {"ru":"Вода + яичный белок для Нэм","vi":"Nước cuốn nem","grams":"10"},
      {"ru":"Начинка для Нэм","vi":"Nhân Nem Trộn Sẵn","grams":"150"},
      {"ru":"Масло фритюрное","vi":"Dầu chiên","grams":"36"},
      {"ru":"Соус Рыбный для Нэм","vi":"Nước chấm nem","grams":"30"}
    ]}
  ],
  "Бань Бао": [
    {"ru":"Бань Бао с курицей и сыром","vi":"Bánh Bao Xu Ga","portion":"180","photo":"","ingredients":[
      {"ru":"Тесто для Бань Бао","vi":"Bột làm Bánh Bao","grams":"105"},
      {"ru":"Начинка Бань Бао с курицей","vi":"Nhân Bánh Bao Gà","grams":"75"}
    ]}
  ],
  "Напитки": [
    {"ru":"Манго шейк","vi":"Sinh Tố Xoài","portion":"400 мл","photo":"","ingredients":[
      {"ru":"Манго см","vi":"Xoài đông đá","grams":"170"},
      {"ru":"Сахарный сироп","vi":"Xi-rô đường","grams":"40"},
      {"ru":"Вода","vi":"Nước","grams":"210"}
    ]}
  ],
  "Кофе": [
    {"ru":"Эспрессо","vi":"Espresso","portion":"30мл","photo":"","ingredients":[
      {"ru":"Кофе зерновой","vi":"Cà phê hạt","grams":"14"}
    ]}
  ],
  "ТК Бабл Ти": [
    {"ru":"Бабл Ти Карамельный","vi":"Trà sữa Caramel","portion":"400","photo":"","ingredients":[
      {"ru":"Тапиока","vi":"Trân châu","grams":"80"},
      {"ru":"Основа чай Карамельный","vi":"Nước cốt trà Caramel","grams":"240"},
      {"ru":"Лед","vi":"Đá","grams":"80"}
    ]}
  ],
  "Блюда ВК": [
    {"ru":"Нэм Том","vi":"Nem tôm","portion":"4 шт/160/30","photo":"","ingredients":[
      {"ru":"Рисовая бумага квадратная","vi":"Bánh tráng nem vuông","grams":"24 (4 шт)"},
      {"ru":"Вода + яичный белок для Нэм","vi":"Nước cuốn nem","grams":"14"},
      {"ru":"Начинка для Нэм Том","vi":"Nhân Nem Tôm","grams":"150"},
      {"ru":"Масло фритюрное","vi":"Dầu chiên","grams":"40"},
      {"ru":"Соус Рыбный для Нэм","vi":"Nước chấm nem","grams":"30"}
    ]}
  ],
  "Курица (Депо)": [
    {"ru":"Суп Фо Га Та","vi":"Phở Gà Ta","portion":"700","photo":"","ingredients":[
      {"ru":"Лапша Фо свежая","vi":"Phở Tươi","grams":"150"},
      {"ru":"Курица тушка вареная","vi":"Gà Nguyên Con Luộc","grams":"70"},
      {"ru":"Лук зеленый","vi":"Hành Lá","grams":"20"},
      {"ru":"Кинза","vi":"Rau Mùi","grams":"5"},
      {"ru":"Лимонные листья","vi":"Lá chanh","grams":"0.5"},
      {"ru":"Грибы Шитаке","vi":"Nấm Hương","grams":"10"},
      {"ru":"Бульон для Фо Га Та","vi":"Nước Dùng Phở Gà Ta","grams":"400"},
      {"ru":"Перец черный","vi":"Hạt Tiêu Xay","grams":"0.5"},
      {"ru":"Ростки бобов","vi":"Giá đỗ","grams":"15"},
      {"ru":"Лайм","vi":"Chanh Xanh","grams":"15"},
      {"ru":"Кинза","vi":"Rau Mùi","grams":"1"},
      {"ru":"Мята","vi":"Bạc Hà","grams":"1"},
      {"ru":"Перец острый","vi":"Ớt Cay","grams":"2"}
    ]}
  ],
  "Пивные закуски": [
    {"ru":"Курица Га Ранг Муой","vi":"Gà Rang Muối","portion":"200","photo":"","ingredients":[
      {"ru":"Куриное бедро","vi":"Đùi gà","grams":"200"},
      {"ru":"Соль","vi":"Muối","grams":"2"},
      {"ru":"Перец черный","vi":"Tiêu đen","grams":"1"},
      {"ru":"Мука в/с","vi":"Bột Mì","grams":"15"},
      {"ru":"Яйцо куриное (желток)","vi":"Trứng gà (lòng đỏ)","grams":"1"},
      {"ru":"Масло фритюрное","vi":"Dầu Chiên","grams":"50"},
      {"ru":"Вермишель Мьен сухая","vi":"Miến","grams":"12"},
      {"ru":"Лимонные стебли","vi":"Sả","grams":"6"},
      {"ru":"Мука с солью","vi":"Bột Rang Muối","grams":"20"},
      {"ru":"Мята","vi":"Bạc hà","grams":"2"},
      {"ru":"Перец острый","vi":"Ớt cay","grams":"2"}
    ]}
  ],
  "Утка (Сити)": [
    {"ru":"Лапша с уткой Ми Чон Вит Куай","vi":"Mì trộn vịt quay","portion":"390","photo":"","ingredients":[
      {"ru":"Лапша Яичная","vi":"Mì trứng","grams":"150"},
      {"ru":"Утка","vi":"Vịt","grams":"95"},
      {"ru":"Масло фритюрное","vi":"Dầu chiên","grams":"20"},
      {"ru":"Лук красный","vi":"Hành tím","grams":"10"},
      {"ru":"Салат Айсберг","vi":"Salad tròn","grams":"10"},
      {"ru":"Морковь","vi":"Cà rốt","grams":"10"},
      {"ru":"Ростки бобов","vi":"Giá đỗ","grams":"10"},
      {"ru":"Кинза","vi":"Rau mùi","grams":"10"},
      {"ru":"Соус Соевый для утки","vi":"Sốt xì dầu cho vịt","grams":"100"},
      {"ru":"Лук зеленый","vi":"Hành lá","grams":"6"},
      {"ru":"Масло растительное","vi":"Dầu thực vật","grams":"4"},
      {"ru":"Арахис жареный","vi":"Lạc rang","grams":"10"}
    ]}
  ]
};

const PF_RECIPES = {
  "ПФ": [
    {"ru":"Начинка Том Ям","vi":"Nhân Tom Yum","portion":"117","photo":"","ingredients":[
      {"ru":"Лимонные листья","vi":"Lá chanh","grams":"0.5"},
      {"ru":"Перец острый","vi":"Ớt cay","grams":"1"},
      {"ru":"Лимонные стебли","vi":"Sả","grams":"2"},
      {"ru":"Галангал","vi":"Riềng","grams":"2"},
      {"ru":"Имбирь","vi":"Gừng","grams":"2"},
      {"ru":"Кальмар","vi":"Mực","grams":"40"},
      {"ru":"Креветки 31/40 см","vi":"Tôm 31/40 đông lạnh sm","grams":"70"}
    ]},
    {"ru":"Говядина окорок обжаренный","vi":"Mông bò xào","portion":"140","photo":"","ingredients":[
      {"ru":"Масло растительное","vi":"Dầu thực vật","grams":"20"},
      {"ru":"Говядина окорок","vi":"Mông bò","grams":"200"},
      {"ru":"Бульон куриный сухой","vi":"Bột nêm gà","grams":"4"},
      {"ru":"Усилитель вкуса","vi":"Mì chính","grams":"4"},
      {"ru":"Чеснок","vi":"Tỏi","grams":"15"},
      {"ru":"Имбирь","vi":"Gừng","grams":"15"},
      {"ru":"Перец черный","vi":"Hạt tiêu xay","grams":"2"}
    ]}
  ],
  "ПФ Соус": [
    {"ru":"Масло красное","vi":"Dầu điều đỏ","portion":"1000","photo":"","ingredients":[
      {"ru":"Масло растительное","vi":"Dầu thực vật","grams":"1100"},
      {"ru":"Специя Красный орех","vi":"Hạt điều đỏ","grams":"150"},
      {"ru":"Лук репчатый","vi":"Hành tây trắng","grams":"60"}
    ]},
    {"ru":"Зам Той","vi":"Giấm Tỏi","portion":"1250","photo":"","ingredients":[
      {"ru":"Уксус 9%","vi":"Giấm 9%","grams":"1000"},
      {"ru":"Чеснок","vi":"Tỏi","grams":"200"},
      {"ru":"Перец вьетнамский","vi":"Ớt cay Việt Nam","grams":"80"}
    ]},
    {"ru":"Соус Кисло-сладкий для салата","vi":"Nước Sốt Chua Ngọt Cho Salad","portion":"1350","photo":"","ingredients":[
      {"ru":"Соус Рыбный","vi":"Nước mắm nhạt","grams":"400"},
      {"ru":"Сахар","vi":"Đường","grams":"600"},
      {"ru":"Вода","vi":"Nước","grams":"100"},
      {"ru":"Уксус 9%","vi":"Giấm 9%","grams":"50"},
      {"ru":"Соус Сладкий Чили для курицы","vi":"Tương ớt ngọt cho gà","grams":"100"},
      {"ru":"Сок лимонный","vi":"Nước chanh","grams":"175"},
      {"ru":"Чеснок","vi":"Tỏi","grams":"25"},
      {"ru":"Перец острый","vi":"Ớt cay","grams":"25"}
    ]},
    {"ru":"Соус Сот Сао","vi":"Sốt Xào","portion":"4100","photo":"","ingredients":[
      {"ru":"Соус Рыбный концентрат","vi":"Nước mắm cô đặc 40 độ","grams":"350"},
      {"ru":"Сахар","vi":"Đường","grams":"150"},
      {"ru":"Бульон куриный сухой","vi":"Bột nêm gà","grams":"320"},
      {"ru":"Соус Устричный","vi":"Dầu hào","grams":"200"},
      {"ru":"Усилитель вкуса","vi":"Mì chính","grams":"280"},
      {"ru":"Масло кунжутное","vi":"Dầu vừng","grams":"30"},
      {"ru":"Вода","vi":"Nước","grams":"2900"},
      {"ru":"Крахмал","vi":"Bột năng","grams":"70"},
      {"ru":"Вода","vi":"Nước","grams":"100"}
    ]}
  ],
  "ПФ Бабл Ти": [
    {"ru":"Сахарный сироп","vi":"Xi-rô đường","portion":"750","photo":"","ingredients":[
      {"ru":"Сахар","vi":"Đường","grams":"500"},
      {"ru":"Вода","vi":"Nước","grams":"300"}
    ]},
    {"ru":"Тапиока","vi":"Trân Châu","portion":"800","photo":"","ingredients":[
      {"ru":"Тапиока","vi":"Trân châu","grams":"500"},
      {"ru":"Вода","vi":"Nước","grams":"3000"},
      {"ru":"Сахарный сироп","vi":"Xi-rô đường","grams":"250"}
    ]},
    {"ru":"Крем Чиз","vi":"Kem Cheese","portion":"440","photo":"","ingredients":[
      {"ru":"Порошок Крем Чиз","vi":"Bột kem cheese","grams":"100"},
      {"ru":"Сливки Шантипак","vi":"Sữa béo Shantipak","grams":"130"},
      {"ru":"Молоко 3,5%","vi":"Sữa 3.5%","grams":"250"},
      {"ru":"Соль","vi":"Muối","grams":"6"}
    ]},
    {"ru":"Основа чай Жасмин","vi":"Nước cốt trà nhài Jasmine","portion":"2150","photo":"","ingredients":[
      {"ru":"Чай Жасмин","vi":"Trà nhài jasmine","grams":"40"},
      {"ru":"Вода","vi":"Nước","grams":"1100"},
      {"ru":"Молоко сухое","vi":"Sữa bột","grams":"250"},
      {"ru":"Сахар","vi":"Đường","grams":"120"},
      {"ru":"Молоко сгущеное","vi":"Sữa đặc","grams":"150"},
      {"ru":"Лед","vi":"Đá","grams":"650"}
    ]}
  ],
  "Бульон Фо ПФ": [
    {"ru":"Бульон Фо","vi":"Nước Dùng Phở","portion":"5 lit","photo":"","ingredients":[
      {"ru":"Бульон на говяжьих костях","vi":"Nước xương bò","grams":"5 lit"},
      {"ru":"Лук репчатый","vi":"Hành tây trắng","grams":"50"},
      {"ru":"Имбирь","vi":"Gừng","grams":"30"},
      {"ru":"Специя Кардамон Тхао Куа","vi":"Thảo quả","grams":"2.5"},
      {"ru":"Специя Анис","vi":"Hoa hồi","grams":"2"},
      {"ru":"Специя Корица в палочках","vi":"Quế thanh","grams":"2"},
      {"ru":"Соус Рыбный концентрат","vi":"Nước mắm cô đặc 40 độ","grams":"42.5"},
      {"ru":"Соль","vi":"Muối","grams":"22"},
      {"ru":"Усилитель вкуса","vi":"Mì chính","grams":"29"},
      {"ru":"Сахар","vi":"Đường","grams":"25"},
      {"ru":"Специя Ви Фо","vi":"Vị phở","grams":"7.5"},
      {"ru":"Специя Хай Чау","vi":"Hải Châu","grams":"20"},
      {"ru":"Бульон куриный сухой","vi":"Bột nêm gà","grams":"20"}
    ]}
  ],
  "Бульон Том Ям ПФ": [
    {"ru":"Бульон на куриных костях","vi":"Nước Xương Gà","portion":"2500","photo":"","ingredients":[
      {"ru":"Куриные кости","vi":"Xương gà","grams":"250"},
      {"ru":"Соль","vi":"Muối","grams":"5"},
      {"ru":"Уксус 9%","vi":"Giấm 9%","grams":"5"},
      {"ru":"Вода","vi":"Nước","grams":"2500"}
    ]},
    {"ru":"Бульон Том Ям","vi":"Nước Dùng Tom Yum","portion":"2500","photo":"","ingredients":[
      {"ru":"Бульон на куриных костях","vi":"Nước xương gà","grams":"2500"},
      {"ru":"Лимонные стебли","vi":"Sả","grams":"12.5"},
      {"ru":"Галангал","vi":"Riềng","grams":"12.5"},
      {"ru":"Кинза","vi":"Rau mùi","grams":"12.5"},
      {"ru":"Сельдерей","vi":"Сần tây","grams":"12.5"},
      {"ru":"Бульон куриный сухой","vi":"Bột nêm gà","grams":"32.5"},
      {"ru":"Усилитель вкуса","vi":"Mì chính","grams":"32.5"},
      {"ru":"Сахар","vi":"Đường","grams":"50"},
      {"ru":"Сок лимонный","vi":"Nước chanh","grams":"32.5"},
      {"ru":"Соус Шрирача","vi":"Tương ớt Sriracha","grams":"17.5"},
      {"ru":"Соус Рыбный концентрат","vi":"Nước mắm cô đặc 40 độ","grams":"62.5"},
      {"ru":"Паста Том Ям","vi":"Pasta Tom Yum","grams":"100"}
    ]}
  ],
  "Доп ингредиенты": [
    {"ru":"Арахис жареный","vi":"Lạc rang","portion":"10","photo":"","ingredients":[
      {"ru":"Арахис жареный пф","vi":"Lạc rang","grams":"10"}
    ]},
    {"ru":"Бульон Фо","vi":"Nước dùng phở","portion":"100","photo":"","ingredients":[
      {"ru":"Бульон Фо пф","vi":"Nước dùng phở","grams":"100"}
    ]},
    {"ru":"Говядина обжаренная","vi":"Mông bò xào","portion":"60","photo":"","ingredients":[
      {"ru":"Говядина окорок обжаренный пф","vi":"Mông bò xào","grams":"60"}
    ]}
  ]
};

const QUESTIONS_DB = {
  "Супы": [
    {"type":"in_dish","dish":{"ru":"Суп Фо Бо","vi":"Phở Bò"},"options":["Лапша Фо свежая","Говядина окорок","Куриное бедро жареное","Перец черный"],"correct":0,"options_bilingual":[{"ru":"Лапша Фо свежая","vi":"Phở tươi"},{"ru":"Говядина окорок","vi":"Mông bò"},{"ru":"Куриное бедро жареное","vi":"Đùi gà xào"},{"ru":"Перец черный","vi":"Hạt tiêu xay"}]},
    {"type":"not_in_dish","dish":{"ru":"Суп Фо Бо","vi":"Phở Bò"},"options":["Мята","Лапша Фо свежая","Говядина окорок","Бульон Фо"],"correct":0,"options_bilingual":[{"ru":"Мята","vi":"Bạc Hà"},{"ru":"Лапша Фо свежая","vi":"Phở tươi"},{"ru":"Говядина окорок","vi":"Mông bò"},{"ru":"Бульон Фо","vi":"Nước dùng phở"}]},
    {"type":"grammage","dish":{"ru":"Суп Фо Бо","vi":"Phở Bò"},"ingredient":{"ru":"Лапша Фо свежая","vi":"Phở tươi"},"options":["150","120","180","225"],"correct":0,"options_bilingual":[{"ru":"150","vi":"150"},{"ru":"120","vi":"120"},{"ru":"180","vi":"180"},{"ru":"225","vi":"225"}]}
  ]
};