document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.info-btn');
    const panels = document.querySelectorAll('.info-panel');
    const overlay = document.querySelector('.overlay');
    const closeButtons = document.querySelectorAll('.close-btn');
    
    // Показываем панель при нажатии на кнопку
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            
            // Скрываем все панели
            panels.forEach(panel => {
                panel.classList.remove('active');
            });
            
            // Показываем overlay
            overlay.classList.add('active');
            
            // Показываем выбранную панель с анимацией
            setTimeout(() => {
                targetPanel.classList.add('active');
                
                // Анимация с Anime.js
                anime({
                    targets: targetPanel,
                    scale: [0.9, 1],
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeOutElastic(1, .8)'
                });
            }, 100);
            
            // Анимация для элементов внутри панели
            if (targetId === 'skills') {
                animateSkillBars();
            }
        });
    });
    
    // Скрываем панель при нажатии на крестик или overlay
    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllPanels);
    });
    
    overlay.addEventListener('click', closeAllPanels);
    
    function closeAllPanels() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
        overlay.classList.remove('active');
    }
    
    // Анимация для skill bars
    function animateSkillBars() {
        const skills = document.querySelectorAll('.skill');
        
        skills.forEach(skill => {
            const span = skill.querySelector('span');
            const percent = parseInt(span.textContent);
            
            anime({
                targets: skill,
                backgroundSize: ['0% 100%', `${percent}% 100%`],
                backgroundColor: ['#f1f1f1', '#e0f7fa'],
                backgroundImage: ['linear-gradient(to right, var(--accent-color) 0%, #f1f1f1 0%)', 
                                 `linear-gradient(to right, var(--accent-color) ${percent}%, #f1f1f1 ${percent}%)`],
                duration: 1500,
                easing: 'easeOutQuart',
                delay: anime.stagger(100)
            });
        });
    }
    
    // Добавляем обработчик для формы
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
            this.reset();
            closeAllPanels();
        });
    }
});