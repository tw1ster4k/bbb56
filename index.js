const navbarBtn = document.querySelector(".mobile-line-menu");
const navbarMobil = document.querySelector(".mobile-line");

navbarBtn.addEventListener("click", function(e) {
    if(navbarBtn.classList.contains('active')){
        navbarBtn.classList.remove('active')
        navbarBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="24" fill="#DCEFF9"/>
                        <path d="M14.25 17C14.25 16.5858 14.5858 16.25 15 16.25H33C33.4142 16.25 33.75 16.5858 33.75 17C33.75 17.4142 33.4142 17.75 33 17.75H15C14.5858 17.75 14.25 17.4142 14.25 17Z" fill="#0082B8"/>
                        <path d="M14.25 24C14.25 23.5858 14.5858 23.25 15 23.25H33C33.4142 23.25 33.75 23.5858 33.75 24C33.75 24.4142 33.4142 24.75 33 24.75H15C14.5858 24.75 14.25 24.4142 14.25 24Z" fill="#0082B8"/>
                        <path d="M15 30.25C14.5858 30.25 14.25 30.5858 14.25 31C14.25 31.4142 14.5858 31.75 15 31.75H33C33.4142 31.75 33.75 31.4142 33.75 31C33.75 30.5858 33.4142 30.25 33 30.25H15Z" fill="#0082B8"/>
                        </svg>`;
    }else{
        navbarBtn.classList.add('active')
        navbarBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="#DCEFF9"/>
        <path d="M18.5303 17.4697C18.2374 17.1768 17.7626 17.1768 17.4697 17.4697C17.1768 17.7626 17.1768 18.2374 17.4697 18.5303L22.9393 24L17.4697 29.4697C17.1768 29.7626 17.1768 30.2374 17.4697 30.5303C17.7626 30.8232 18.2374 30.8232 18.5303 30.5303L24 25.0607L29.4697 30.5303C29.7626 30.8232 30.2374 30.8232 30.5303 30.5303C30.8232 30.2374 30.8232 29.7626 30.5303 29.4697L25.0607 24L30.5303 18.5303C30.8232 18.2374 30.8232 17.7626 30.5303 17.4697C30.2374 17.1768 29.7626 17.1768 29.4697 17.4697L24 22.9393L18.5303 17.4697Z" fill="#0082B8"/>
        </svg>`;
    navbarMobil.innerHTML += `
                <div class="navbar-mobile-block">
                <a class="navbar-mobile-block-point">Услуги</a>
                <a class="navbar-mobile-block-point">Специалисты</a>
                <a class="navbar-mobile-block-point">Клиника</a>
                <a class="navbar-mobile-block-point">Контакты</a>
                <a class="navbar-mobile-block-point">Отзывы</a>
                <a class="navbar-mobile-block-point">COVID-19</a>
                <a class="navbar-mobile-block-point">Пациенту</a>
                <a class="navbar-mobile-block-point">Новости и акции</a>
                <a class="navbar-mobile-block-point">FAQ</a>
                <a class="navbar-mobile-block-point">Наш блог</a>
                <svg style="margin-top:16px;margin-bottom:32px;" xmlns="http://www.w3.org/2000/svg" width="343" height="2" viewBox="0 0 343 2" fill="none">
                <path d="M0 1H343" stroke="#DCEFF9"/>
                </svg>
                <div class="navbar-mobile-block-phones">
                </div>
                </div>
                `
    }
}) 



const slides = document.querySelector(".carousel-content");
const images = document.querySelectorAll('.carousel-content-img');
const dotsContainer = document.querySelector('.carousel-dots');
let currentIndex = 0;


images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add("carousel-dots-dot");
    dotsContainer.appendChild(dot);
    if(i === currentIndex){
        dot.classList.add("active");
    }
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
    })
})

const dots = document.querySelectorAll('.carousel-dots-dot');

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    
    dots[currentIndex].classList.add('active');
  }
  

  setInterval(() => {
    currentIndex++;
    if(currentIndex >= images.length) currentIndex = 0;
    updateSlider();
 },5000);



 document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.description-content');
    const dots = document.querySelectorAll('.description-dots-dot');

    // Изначально активна первая точка
    let currentIndex = 0;

    // Обработчик для обновления активной точки при скролле
    function updateDots() {
        const scrollLeft = ele.scrollLeft;
        const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

        // Определяем количество карточек (здесь у вас их три)
        const totalCards = document.querySelectorAll('.description-card').length;

        // Вычисляем текущий индекс на основе скролла
        const index = Math.round((scrollLeft / maxScrollLeft) * (totalCards -1));

        if (index !== currentIndex) {
            // Удаляем активный класс у старой точки
            dots[currentIndex].classList.remove('active');
            // Добавляем активный класс новой точке
            dots[index].classList.add('active');
            currentIndex = index;
        }
    }

    // Обработчик клика по точкам для прокрутки к соответствующей секции
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            const totalCards = document.querySelectorAll('.description-card').length;
            const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

            // Вычисляем позицию прокрутки для выбранной карточки
            const targetScrollLeft = (index / (totalCards -1)) * maxScrollLeft;

            // Анимация прокрутки (можно использовать smooth)
            ele.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
        });
    });

    // Следим за скроллом чтобы обновлять активную точку
    ele.addEventListener('scroll', updateDots);

    // Ваш существующий код перетаскивания мышью
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Инициализация слушателя мыши
    ele.addEventListener('mousedown', mouseDownHandler);
});
 

document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.blog-content');
    const dots = document.querySelectorAll('.blog-dots-dot');

   // Изначально активна первая точка
   let currentIndex = 0;

   // Обработчик для обновления активной точки при скролле
   function updateDots() {
       const scrollLeft = ele.scrollLeft;
       const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

       // Определяем количество карточек (здесь у вас их три)
       const totalCards = document.querySelectorAll('.blog-card').length;

       // Вычисляем текущий индекс на основе скролла
       const index = Math.round((scrollLeft / maxScrollLeft) * (totalCards -1));

       if (index !== currentIndex) {
           // Удаляем активный класс у старой точки
           dots[currentIndex].classList.remove('active');
           // Добавляем активный класс новой точке
           dots[index].classList.add('active');
           currentIndex = index;
       }
   }

   // Обработчик клика по точкам для прокрутки к соответствующей секции
   dots.forEach(dot => {
       dot.addEventListener('click', () => {
           const index = parseInt(dot.dataset.index);
           const totalCards = document.querySelectorAll('.blog-card').length;
           const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

           // Вычисляем позицию прокрутки для выбранной карточки
           const targetScrollLeft = (index / (totalCards -1)) * maxScrollLeft;

           // Анимация прокрутки (можно использовать smooth)
           ele.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
       });
   });

   // Следим за скроллом чтобы обновлять активную точку
   ele.addEventListener('scroll', updateDots);

   // Ваш существующий код перетаскивания мышью
   let pos = { top: 0, left: 0, x: 0, y: 0 };

   const mouseDownHandler = function (e) {
       ele.style.cursor = 'grabbing';
       ele.style.userSelect = 'none';

       pos = {
           left: ele.scrollLeft,
           top: ele.scrollTop,
           x: e.clientX,
           y: e.clientY,
       };

       document.addEventListener('mousemove', mouseMoveHandler);
       document.addEventListener('mouseup', mouseUpHandler);
   };

   const mouseMoveHandler = function (e) {
       const dx = e.clientX - pos.x;
       const dy = e.clientY - pos.y;

       ele.scrollTop = pos.top - dy;
       ele.scrollLeft = pos.left - dx;
   };

   const mouseUpHandler = function () {
       ele.style.cursor = 'grab';
       ele.style.removeProperty('user-select');

       document.removeEventListener('mousemove', mouseMoveHandler);
       document.removeEventListener('mouseup', mouseUpHandler);
   };

   // Инициализация слушателя мыши
   ele.addEventListener('mousedown', mouseDownHandler);
});

document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.news-content');
    const dots = document.querySelectorAll('.news-dots-dot');

   // Изначально активна первая точка
   let currentIndex = 0;

   // Обработчик для обновления активной точки при скролле
   function updateDots() {
       const scrollLeft = ele.scrollLeft;
       const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

       // Определяем количество карточек (здесь у вас их три)
       const totalCards = document.querySelectorAll('.news-card').length;

       // Вычисляем текущий индекс на основе скролла
       const index = Math.round((scrollLeft / maxScrollLeft) * (totalCards -1));

       if (index !== currentIndex) {
           // Удаляем активный класс у старой точки
           dots[currentIndex].classList.remove('active');
           // Добавляем активный класс новой точке
           dots[index].classList.add('active');
           currentIndex = index;
       }
   }

   // Обработчик клика по точкам для прокрутки к соответствующей секции
   dots.forEach(dot => {
       dot.addEventListener('click', () => {
           const index = parseInt(dot.dataset.index);
           const totalCards = document.querySelectorAll('.news-card').length;
           const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

           // Вычисляем позицию прокрутки для выбранной карточки
           const targetScrollLeft = (index / (totalCards -1)) * maxScrollLeft;

           // Анимация прокрутки (можно использовать smooth)
           ele.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
       });
   });

   // Следим за скроллом чтобы обновлять активную точку
   ele.addEventListener('scroll', updateDots);

   // Ваш существующий код перетаскивания мышью
   let pos = { top: 0, left: 0, x: 0, y: 0 };

   const mouseDownHandler = function (e) {
       ele.style.cursor = 'grabbing';
       ele.style.userSelect = 'none';

       pos = {
           left: ele.scrollLeft,
           top: ele.scrollTop,
           x: e.clientX,
           y: e.clientY,
       };

       document.addEventListener('mousemove', mouseMoveHandler);
       document.addEventListener('mouseup', mouseUpHandler);
   };

   const mouseMoveHandler = function (e) {
       const dx = e.clientX - pos.x;
       const dy = e.clientY - pos.y;

       ele.scrollTop = pos.top - dy;
       ele.scrollLeft = pos.left - dx;
   };

   const mouseUpHandler = function () {
       ele.style.cursor = 'grab';
       ele.style.removeProperty('user-select');

       document.removeEventListener('mousemove', mouseMoveHandler);
       document.removeEventListener('mouseup', mouseUpHandler);
   };

   // Инициализация слушателя мыши
   ele.addEventListener('mousedown', mouseDownHandler);
});



document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.employees-content');
    const dots = document.querySelectorAll('.employees-dots-dot');

   // Изначально активна первая точка
   let currentIndex = 0;

   // Обработчик для обновления активной точки при скролле
   function updateDots() {
       const scrollLeft = ele.scrollLeft;
       const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

       // Определяем количество карточек (здесь у вас их три)
       const totalCards = document.querySelectorAll('.employees-card').length;

       // Вычисляем текущий индекс на основе скролла
       const index = Math.round((scrollLeft / maxScrollLeft) * (totalCards -1));

       if (index !== currentIndex) {
           // Удаляем активный класс у старой точки
           dots[currentIndex].classList.remove('active');
           // Добавляем активный класс новой точке
           dots[index].classList.add('active');
           currentIndex = index;
       }
   }

   // Обработчик клика по точкам для прокрутки к соответствующей секции
   dots.forEach(dot => {
       dot.addEventListener('click', () => {
           const index = parseInt(dot.dataset.index);
           const totalCards = document.querySelectorAll('.employees-card').length;
           const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

           // Вычисляем позицию прокрутки для выбранной карточки
           const targetScrollLeft = (index / (totalCards -1)) * maxScrollLeft;

           // Анимация прокрутки (можно использовать smooth)
           ele.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
       });
   });

   // Следим за скроллом чтобы обновлять активную точку
   ele.addEventListener('scroll', updateDots);

   // Ваш существующий код перетаскивания мышью
   let pos = { top: 0, left: 0, x: 0, y: 0 };

   const mouseDownHandler = function (e) {
       ele.style.cursor = 'grabbing';
       ele.style.userSelect = 'none';

       pos = {
           left: ele.scrollLeft,
           top: ele.scrollTop,
           x: e.clientX,
           y: e.clientY,
       };

       document.addEventListener('mousemove', mouseMoveHandler);
       document.addEventListener('mouseup', mouseUpHandler);
   };

   const mouseMoveHandler = function (e) {
       const dx = e.clientX - pos.x;
       const dy = e.clientY - pos.y;

       ele.scrollTop = pos.top - dy;
       ele.scrollLeft = pos.left - dx;
   };

   const mouseUpHandler = function () {
       ele.style.cursor = 'grab';
       ele.style.removeProperty('user-select');

       document.removeEventListener('mousemove', mouseMoveHandler);
       document.removeEventListener('mouseup', mouseUpHandler);
   };

   // Инициализация слушателя мыши
   ele.addEventListener('mousedown', mouseDownHandler);
});




document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.kids-content');
    const dots = document.querySelectorAll('.kids-dots-dot');

   // Изначально активна первая точка
   let currentIndex = 0;

   // Обработчик для обновления активной точки при скролле
   function updateDots() {
       const scrollLeft = ele.scrollLeft;
       const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

       // Определяем количество карточек (здесь у вас их три)
       const totalCards = document.querySelectorAll('.kids-card').length;

       // Вычисляем текущий индекс на основе скролла
       const index = Math.round((scrollLeft / maxScrollLeft) * (totalCards -1));

       if (index !== currentIndex) {
           // Удаляем активный класс у старой точки
           dots[currentIndex].classList.remove('active');
           // Добавляем активный класс новой точке
           dots[index].classList.add('active');
           currentIndex = index;
       }
   }

   // Обработчик клика по точкам для прокрутки к соответствующей секции
   dots.forEach(dot => {
       dot.addEventListener('click', () => {
           const index = parseInt(dot.dataset.index);
           const totalCards = document.querySelectorAll('.kids-card').length;
           const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

           // Вычисляем позицию прокрутки для выбранной карточки
           const targetScrollLeft = (index / (totalCards -1)) * maxScrollLeft;

           // Анимация прокрутки (можно использовать smooth)
           ele.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
       });
   });

   // Следим за скроллом чтобы обновлять активную точку
   ele.addEventListener('scroll', updateDots);

   // Ваш существующий код перетаскивания мышью
   let pos = { top: 0, left: 0, x: 0, y: 0 };

   const mouseDownHandler = function (e) {
       ele.style.cursor = 'grabbing';
       ele.style.userSelect = 'none';

       pos = {
           left: ele.scrollLeft,
           top: ele.scrollTop,
           x: e.clientX,
           y: e.clientY,
       };

       document.addEventListener('mousemove', mouseMoveHandler);
       document.addEventListener('mouseup', mouseUpHandler);
   };

   const mouseMoveHandler = function (e) {
       const dx = e.clientX - pos.x;
       const dy = e.clientY - pos.y;

       ele.scrollTop = pos.top - dy;
       ele.scrollLeft = pos.left - dx;
   };

   const mouseUpHandler = function () {
       ele.style.cursor = 'grab';
       ele.style.removeProperty('user-select');

       document.removeEventListener('mousemove', mouseMoveHandler);
       document.removeEventListener('mouseup', mouseUpHandler);
   };

   // Инициализация слушателя мыши
   ele.addEventListener('mousedown', mouseDownHandler);
});


document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.reviews-content');
    const dots = document.querySelectorAll('.reviews-dots-dot');

   // Изначально активна первая точка
   let currentIndex = 0;

   // Обработчик для обновления активной точки при скролле
   function updateDots() {
       const scrollLeft = ele.scrollLeft;
       const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

       // Определяем количество карточек (здесь у вас их три)
       const totalCards = document.querySelectorAll('.reviews-card').length;

       // Вычисляем текущий индекс на основе скролла
       const index = Math.round((scrollLeft / maxScrollLeft) * (totalCards -1));

       if (index !== currentIndex) {
           // Удаляем активный класс у старой точки
           dots[currentIndex].classList.remove('active');
           // Добавляем активный класс новой точке
           dots[index].classList.add('active');
           currentIndex = index;
       }
   }

   // Обработчик клика по точкам для прокрутки к соответствующей секции
   dots.forEach(dot => {
       dot.addEventListener('click', () => {
           const index = parseInt(dot.dataset.index);
           const totalCards = document.querySelectorAll('.reviews-card').length;
           const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

           // Вычисляем позицию прокрутки для выбранной карточки
           const targetScrollLeft = (index / (totalCards -1)) * maxScrollLeft;

           // Анимация прокрутки (можно использовать smooth)
           ele.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
       });
   });

   // Следим за скроллом чтобы обновлять активную точку
   ele.addEventListener('scroll', updateDots);

   // Ваш существующий код перетаскивания мышью
   let pos = { top: 0, left: 0, x: 0, y: 0 };

   const mouseDownHandler = function (e) {
       ele.style.cursor = 'grabbing';
       ele.style.userSelect = 'none';

       pos = {
           left: ele.scrollLeft,
           top: ele.scrollTop,
           x: e.clientX,
           y: e.clientY,
       };

       document.addEventListener('mousemove', mouseMoveHandler);
       document.addEventListener('mouseup', mouseUpHandler);
   };

   const mouseMoveHandler = function (e) {
       const dx = e.clientX - pos.x;
       const dy = e.clientY - pos.y;

       ele.scrollTop = pos.top - dy;
       ele.scrollLeft = pos.left - dx;
   };

   const mouseUpHandler = function () {
       ele.style.cursor = 'grab';
       ele.style.removeProperty('user-select');

       document.removeEventListener('mousemove', mouseMoveHandler);
       document.removeEventListener('mouseup', mouseUpHandler);
   };

   // Инициализация слушателя мыши
   ele.addEventListener('mousedown', mouseDownHandler);
});


document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.licenses-content');
    const dots = document.querySelectorAll('.licenses-dots-dot');

   // Изначально активна первая точка
   let currentIndex = 0;

   // Обработчик для обновления активной точки при скролле
   function updateDots() {
       const scrollLeft = ele.scrollLeft;
       const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

       // Определяем количество карточек (здесь у вас их три)
       const totalCards = document.querySelectorAll('.licenses-card').length;

       // Вычисляем текущий индекс на основе скролла
       const index = Math.round((scrollLeft / maxScrollLeft) * (totalCards -1));

       if (index !== currentIndex) {
           // Удаляем активный класс у старой точки
           dots[currentIndex].classList.remove('active');
           // Добавляем активный класс новой точке
           dots[index].classList.add('active');
           currentIndex = index;
       }
   }

   // Обработчик клика по точкам для прокрутки к соответствующей секции
   dots.forEach(dot => {
       dot.addEventListener('click', () => {
           const index = parseInt(dot.dataset.index);
           const totalCards = document.querySelectorAll('.licenses-card').length;
           const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

           // Вычисляем позицию прокрутки для выбранной карточки
           const targetScrollLeft = (index / (totalCards -1)) * maxScrollLeft;

           // Анимация прокрутки (можно использовать smooth)
           ele.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
       });
   });

   // Следим за скроллом чтобы обновлять активную точку
   ele.addEventListener('scroll', updateDots);

   // Ваш существующий код перетаскивания мышью
   let pos = { top: 0, left: 0, x: 0, y: 0 };

   const mouseDownHandler = function (e) {
       ele.style.cursor = 'grabbing';
       ele.style.userSelect = 'none';

       pos = {
           left: ele.scrollLeft,
           top: ele.scrollTop,
           x: e.clientX,
           y: e.clientY,
       };

       document.addEventListener('mousemove', mouseMoveHandler);
       document.addEventListener('mouseup', mouseUpHandler);
   };

   const mouseMoveHandler = function (e) {
       const dx = e.clientX - pos.x;
       const dy = e.clientY - pos.y;

       ele.scrollTop = pos.top - dy;
       ele.scrollLeft = pos.left - dx;
   };

   const mouseUpHandler = function () {
       ele.style.cursor = 'grab';
       ele.style.removeProperty('user-select');

       document.removeEventListener('mousemove', mouseMoveHandler);
       document.removeEventListener('mouseup', mouseUpHandler);
   };

   // Инициализация слушателя мыши
   ele.addEventListener('mousedown', mouseDownHandler);
});


document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.gallery-content');
    const dots = document.querySelectorAll('.gallery-dots-dot');

   // Изначально активна первая точка
   let currentIndex = 0;

   // Обработчик для обновления активной точки при скролле
   function updateDots() {
       const scrollLeft = ele.scrollLeft;
       const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

       // Определяем количество карточек (здесь у вас их три)
       const totalCards = document.querySelectorAll('.gallery-content-img').length;

       // Вычисляем текущий индекс на основе скролла
       const index = Math.round((scrollLeft / maxScrollLeft) * (totalCards -1));

       if (index !== currentIndex) {
           // Удаляем активный класс у старой точки
           dots[currentIndex].classList.remove('active');
           // Добавляем активный класс новой точке
           dots[index].classList.add('active');
           currentIndex = index;
       }
   }

   // Обработчик клика по точкам для прокрутки к соответствующей секции
   dots.forEach(dot => {
       dot.addEventListener('click', () => {
           const index = parseInt(dot.dataset.index);
           const totalCards = document.querySelectorAll('.gallery-content-img').length;
           const maxScrollLeft = ele.scrollWidth - ele.clientWidth;

           // Вычисляем позицию прокрутки для выбранной карточки
           const targetScrollLeft = (index / (totalCards -1)) * maxScrollLeft;

           // Анимация прокрутки (можно использовать smooth)
           ele.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
       });
   });

   // Следим за скроллом чтобы обновлять активную точку
   ele.addEventListener('scroll', updateDots);

   // Ваш существующий код перетаскивания мышью
   let pos = { top: 0, left: 0, x: 0, y: 0 };

   const mouseDownHandler = function (e) {
       ele.style.cursor = 'grabbing';
       ele.style.userSelect = 'none';

       pos = {
           left: ele.scrollLeft,
           top: ele.scrollTop,
           x: e.clientX,
           y: e.clientY,
       };

       document.addEventListener('mousemove', mouseMoveHandler);
       document.addEventListener('mouseup', mouseUpHandler);
   };

   const mouseMoveHandler = function (e) {
       const dx = e.clientX - pos.x;
       const dy = e.clientY - pos.y;

       ele.scrollTop = pos.top - dy;
       ele.scrollLeft = pos.left - dx;
   };

   const mouseUpHandler = function () {
       ele.style.cursor = 'grab';
       ele.style.removeProperty('user-select');

       document.removeEventListener('mousemove', mouseMoveHandler);
       document.removeEventListener('mouseup', mouseUpHandler);
   };

   // Инициализация слушателя мыши
   ele.addEventListener('mousedown', mouseDownHandler);
});

const callBtn = document.querySelector(".call-btn")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector('.modal-close')

callBtn.addEventListener("click", function() {
    modal.classList.add("active")
    document.querySelector('header').style.filter = "blur(4px)"
    document.querySelector('footer').style.filter = "blur(4px)"
    document.querySelector('.main').style.filter = "blur(4px)"
})

modalClose.addEventListener("click", function() {
    modal.classList.remove("active")
    document.querySelector('header').style.filter = "blur(0px)"
    document.querySelector('footer').style.filter = "blur(0px)"
    document.querySelector('.main').style.filter = "blur(0px)"
})