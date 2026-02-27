document.addEventListener('DOMContentLoaded', function () {
    const navbarBtn = document.querySelector(".mobile-line-menu");
    const navbarMobil = document.querySelector(".mobile-line");

    if (!navbarBtn || !navbarMobil) return;

    // Проверяем, нужно ли использовать расширенное меню
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const extendedMenuPages = ['clinic.html', 'licenses.html', 'requisites.html', 'supervisory.html', 'vacancies.html', 'vacancy-detail.html', 'gallery.html'];
    const useExtendedMenu = extendedMenuPages.includes(currentPage);

    const burgerSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="24" fill="#DCEFF9"/>
            <path d="M14.25 17C14.25 16.5858 14.5858 16.25 15 16.25H33C33.4142 16.25 33.75 16.5858 33.75 17C33.75 17.4142 33.4142 17.75 33 17.75H15C14.5858 17.75 14.25 17.4142 14.25 17Z" fill="#0082B8"/>
            <path d="M14.25 24C14.25 23.5858 14.5858 23.25 15 23.25H33C33.4142 23.25 33.75 23.5858 33.75 24C33.75 24.4142 33.4142 24.75 33 24.75H15C14.5858 24.75 14.25 24.4142 14.25 24Z" fill="#0082B8"/>
            <path d="M15 30.25C14.5858 30.25 14.25 30.5858 14.25 31C14.25 31.4142 14.5858 31.75 15 31.75H33C33.4142 31.75 33.75 31.4142 33.75 31C33.75 30.5858 33.4142 30.25 33 30.25H15Z" fill="#0082B8"/>
        </svg>
    `;

    const closeSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="24" fill="#DCEFF9"/>
            <path d="M18.5303 17.4697C18.2374 17.1768 17.7626 17.1768 17.4697 17.4697C17.1768 17.7626 17.1768 18.2374 17.4697 18.5303L22.9393 24L17.4697 29.4697C17.1768 29.7626 17.1768 30.2374 17.4697 30.5303C17.7626 30.8232 18.2374 30.8232 18.5303 30.5303L24 25.0607L29.4697 30.5303C29.7626 30.8232 30.2374 30.8232 30.5303 30.5303C30.8232 30.2374 30.8232 29.7626 30.5303 29.4697L25.0607 24L30.5303 18.5303C30.8232 18.2374 30.8232 17.7626 30.5303 17.4697C30.2374 17.1768 29.7626 17.1768 29.4697 17.4697L24 22.9393L18.5303 17.4697Z" fill="#0082B8"/>
        </svg>
    `;

    const menuHtml = `
        <div class="navbar-mobile-block">
          <a class="navbar-mobile-block-point" href="services.html">
              <img style="margin-right:4px" src="images/navbaricons/tooth.svg" alt="">
            Услуги
          </a>

          <a class="navbar-mobile-block-point" href="price.html">
                <img style="margin-right:4px" src="images/navbaricons/money-3.svg" alt="">Цены
          </a>

          <a class="navbar-mobile-block-point" href="doctors.html">
            <img style="margin-right:4px" src="images/navbaricons/user-group.svg" alt="">Специалисты
          </a>

          <a class="navbar-mobile-block-point" href="clinic.html">
            <img style="margin-right:4px" src="images/navbaricons/first-aid.svg" alt="">Клиника
          </a>

          <a class="navbar-mobile-block-point" href="contacts.html">
            <img style="margin-right:4px" src="images/navbaricons/contacts.svg" alt="">Контакты
          </a>

          <a class="navbar-mobile-block-point" href="reviews.html">
            <img style="margin-right:4px" src="images/navbaricons/message-3.svg" alt="">Отзывы
          </a>

          <a class="navbar-mobile-block-point" href="covid.html">
            <img style="margin-right:4px" src="images/navbaricons/syringe.svg" alt="">COVID-19
          </a>

          <a class="navbar-mobile-block-point" href="patient.html">
            <img style="margin-right:4px" src="images/navbaricons/pill.svg" alt="">Пациенту
          </a>

          <a class="navbar-mobile-block-point" href="news.html">
            <img style="margin-right:4px" src="images/navbaricons/tag.svg" alt="">Новости и акции
          </a>

          <a class="navbar-mobile-block-point" href="faq.html">
            <img style="margin-right:4px" src="images/navbaricons/help.svg" alt="">FAQ
          </a>

          <a class="navbar-mobile-block-point" href="blog.html">
            <img style="margin-right:4px" src="images/navbaricons/paste.svg" alt="">Наш блог
          </a>

          <svg style="margin-top:16px;margin-bottom:32px;" xmlns="http://www.w3.org/2000/svg" width="343" height="2" viewBox="0 0 343 2" fill="none">
            <path d="M0 1H343" stroke="#DCEFF9"/>
          </svg>

          <div class="navbar-mobile-block-bottom">
            <div class="navbar-mobile-block-actions">
              <button type="button" class="navbar-mobile-btn navbar-mobile-btn-primary call-btn">
                  <img style="margin-right:4px" src="images/navbaricons/call.svg" alt="">Заказать звонок
              </button>

              <a href="https://t.me/..." class="navbar-mobile-btn navbar-mobile-btn-secondary" target="_blank" rel="noopener">
                  <img src="images/icon/telegram2.svg" alt="">Онлайн запись
              </a>
            </div>

            <div class="navbar-mobile-block-phone">
              +7 (3532) 66-20-02
            </div>

            <div class="navbar-mobile-block-socials">
              <a href="https://vk.com/..." class="navbar-mobile-social" target="_blank" rel="noopener">
                <img src="images/vk.svg" alt="VK">
              </a>
              <a href="https://wa.me/..." class="navbar-mobile-social" target="_blank" rel="noopener">
                <img src="images/wa.svg" alt="WhatsApp">
              </a>
              <a href="https://t.me/..." class="navbar-mobile-social" target="_blank" rel="noopener">
                <img src="images/tg.svg" alt="Telegram">
              </a>
            </div>
          </div>
        </div>
    `;

    // Расширенное меню для страниц "О клинике"
    const extendedMenuHtml = `
        <div class="navbar-mobile-extended-block">
            <div class="navbar-mobile-extended-header">
                <p class="navbar-mobile-extended-title">О КЛИНИКЕ</p>
            </div>
            <div class="navbar-mobile-extended-items">
                <a class="navbar-mobile-extended-item" href="clinic.html">
                    <img src="images/navbaricons/info.svg" alt="">
                    <span>О клинике</span>
                </a>
                <a class="navbar-mobile-extended-item" href="licenses.html">
                    <img src="images/navbaricons/paste.svg" alt="">
                    <span>Лицензии</span>
                </a>
                <a class="navbar-mobile-extended-item" href="requisites.html">
                    <img src="images/navbaricons/contacts.svg" alt="">
                    <span>Реквизиты</span>
                </a>
                <a class="navbar-mobile-extended-item" href="supervisory.html">
                    <img src="images/navbaricons/first-aid.svg" alt="">
                    <span>Надзорные органы</span>
                </a>
                <a class="navbar-mobile-extended-item" href="vacancies.html">
                    <img src="images/navbaricons/first-aid.svg" alt="">
                    <span>Вакансии</span>
                </a>
                <a class="navbar-mobile-extended-item" href="gallery.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M7.5 10C8.32843 10 9 9.32843 9 8.5C9 7.67157 8.32843 7 7.5 7C6.67157 7 6 7.67157 6 8.5C6 9.32843 6.67157 10 7.5 10Z" fill="#0082B8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8C2 5.79086 3.79086 4 6 4ZM18 5.5H6C4.61929 5.5 3.5 6.61929 3.5 8V16C3.5 16.3858 3.58741 16.7513 3.7435 17.0775L5.93431 14.0652C6.94223 12.6793 9.03781 12.7719 9.91949 14.2414C10.3009 14.8772 11.2465 14.7968 11.5152 14.1058L12.6188 11.2681C13.3231 9.45705 15.8097 9.26533 16.7833 10.947L20.2901 17.0042C20.4251 16.6969 20.5 16.3572 20.5 16V8C20.5 6.61929 19.3807 5.5 18 5.5ZM6 18.5C5.5612 18.5 5.14881 18.387 4.79036 18.1884L7.14741 14.9474C7.52321 14.4307 8.30452 14.4653 8.63325 15.0131C9.65635 16.7183 12.1925 16.5028 12.9132 14.6495L14.0168 11.8117C14.2651 11.1732 15.1419 11.1056 15.4852 11.6985L19.2344 18.1745C18.8702 18.3817 18.4489 18.5 18 18.5H6Z" fill="#0082B8"/>
</svg>
                    <span>Фотогалерея</span>
                </a>
            </div>
            <div class="navbar-mobile-extended-cta">
                <div class="navbar-mobile-extended-cta-block">
                    <p class="navbar-mobile-extended-cta-title">Записаться онлайн</p>
                    <p class="navbar-mobile-extended-cta-text">Оставьте обращение на сайте, мы свяжемся с Вами в ближайшее время и ответим на все интересующие вопросы.</p>
                    <a href="https://t.me/..." class="navbar-mobile-extended-cta-btn" target="_blank" rel="noopener">
                        <img src="images/icon/icon/telegram2.svg" alt="">
                        <span>Записаться</span>
                    </a>
                </div>
                <div class="navbar-mobile-extended-cta">
                </div>
            </div>
              
        </div>
    `;

    // начальное состояние – бургер и закрытое меню
    navbarBtn.innerHTML = burgerSvg;

    navbarBtn.addEventListener("click", function () {
        const isOpen = navbarBtn.classList.toggle('active');

        // меняем иконку
        navbarBtn.innerHTML = isOpen ? closeSvg : burgerSvg;

        // удаляем предыдущий блок меню, если он был
        const existingMenu = navbarMobil.querySelector('.navbar-mobile-block, .navbar-mobile-extended-block');
        if (existingMenu) {
            existingMenu.remove();
        }

        // если открываем – вставляем соответствующее меню
        if (isOpen) {
            if (useExtendedMenu) {
                navbarMobil.insertAdjacentHTML('beforeend', extendedMenuHtml);
            } else {
                navbarMobil.insertAdjacentHTML('beforeend', menuHtml);
            }
        }
    });
});

// Мобильный поиск
document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector(".mobile-line-search");
    const mobileLine = document.querySelector(".mobile-line");

    if (!searchBtn || !mobileLine) return;

    const searchSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="24" fill="#DCEFF9"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8453 29.3663C26.5006 30.3913 24.8214 31 23 31C18.5817 31 15 27.4183 15 23C15 18.5817 18.5817 15 23 15C27.4183 15 31 18.5817 31 23C31 25.0713 30.2128 26.9587 28.9214 28.3794C28.9479 28.3975 28.9736 28.4175 28.9983 28.4394L33.4983 32.4394C33.8079 32.7146 33.8357 33.1887 33.5606 33.4983C33.2854 33.8079 32.8113 33.8357 32.5017 33.5606L28.0017 29.5606C27.9373 29.5033 27.8851 29.4375 27.8453 29.3663ZM29.5 23C29.5 26.5899 26.5899 29.5 23 29.5C19.4101 29.5 16.5 26.5899 16.5 23C16.5 19.4101 19.4101 16.5 23 16.5C26.5899 16.5 29.5 19.4101 29.5 23Z" fill="#0082B8"/>
        </svg>
    `;

    const closeSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="24" fill="#DCEFF9"/>
            <path d="M18.5303 17.4697C18.2374 17.1768 17.7626 17.1768 17.4697 17.4697C17.1768 17.7626 17.1768 18.2374 17.4697 18.5303L22.9393 24L17.4697 29.4697C17.1768 29.7626 17.1768 30.2374 17.4697 30.5303C17.7626 30.8232 18.2374 30.8232 18.5303 30.5303L24 25.0607L29.4697 30.5303C29.7626 30.8232 30.2374 30.8232 30.5303 30.5303C30.8232 30.2374 30.8232 29.7626 30.5303 29.4697L25.0607 24L30.5303 18.5303C30.8232 18.2374 30.8232 17.7626 30.5303 17.4697C30.2374 17.1768 29.7626 17.1768 29.4697 17.4697L24 22.9393L18.5303 17.4697Z" fill="#0082B8"/>
        </svg>
    `;

    const searchHtml = `
        <div class="mobile-search-block">
            <button class="mobile-search-close" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L12 10.9393L6.53033 5.46967Z" fill="#0082B8"/>
                </svg>
            </button>
            <input type="text" class="mobile-search-input" placeholder="Поиск" />
            <button class="mobile-search-submit" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8453 17.3663C14.5006 18.3913 12.8214 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0713 18.2128 14.9587 16.9214 16.3794C16.9479 16.3975 16.9736 16.4175 16.9983 16.4394L21.4983 20.4394C21.8079 20.7146 21.8357 21.1887 21.5606 21.4983C21.2854 21.8079 20.8113 21.8357 20.5017 21.5606L16.0017 17.5606C15.9373 17.5033 15.8851 17.4375 15.8453 17.3663ZM17.5 11C17.5 14.5899 14.5899 17.5 11 17.5C7.41015 17.5 4.5 14.5899 4.5 11C4.5 7.41015 7.41015 4.5 11 4.5C14.5899 4.5 17.5 7.41015 17.5 11Z" fill="#0082B8"/>
                </svg>
            </button>
        </div>
    `;

    // Изначальное состояние – иконка поиска
    searchBtn.innerHTML = searchSvg;

    searchBtn.addEventListener("click", function () {
        const isOpen = searchBtn.classList.toggle('active');

        // Меняем иконку
        searchBtn.innerHTML = isOpen ? closeSvg : searchSvg;

        // Удаляем старое поле поиска, если есть
        const oldSearch = mobileLine.querySelector('.mobile-search-block');
        if (oldSearch) oldSearch.remove();

        // Если открываем – вставляем поле поиска
        if (isOpen) {
            mobileLine.insertAdjacentHTML('beforeend', searchHtml);
            
            // Получаем элементы один раз
            const searchInput = mobileLine.querySelector('.mobile-search-input');
            const closeBtn = mobileLine.querySelector('.mobile-search-close');
            const submitBtn = mobileLine.querySelector('.mobile-search-submit');

            // Фокус на поле ввода
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 100);
            }

            // Обработчик закрытия по кнопке закрытия
            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    searchBtn.classList.remove('active');
                    searchBtn.innerHTML = searchSvg;
                    const searchBlock = mobileLine.querySelector('.mobile-search-block');
                    if (searchBlock) searchBlock.remove();
                });
            }

            // Обработчик отправки поиска
            if (submitBtn && searchInput) {
                submitBtn.addEventListener('click', function() {
                    if (searchInput.value.trim()) {
                        // Здесь можно добавить логику поиска
                        console.log('Поиск:', searchInput.value);
                        // Например, перенаправление на страницу поиска или выполнение поиска
                    }
                });
            }

            // Обработчик отправки по Enter
            if (searchInput) {
                searchInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' && this.value.trim()) {
                        // Здесь можно добавить логику поиска
                        console.log('Поиск:', this.value);
                        // Например, перенаправление на страницу поиска или выполнение поиска
                    }
                });
            }
        }
    });
});

const slides = document.querySelector(".carousel-content");
const images = document.querySelectorAll('.carousel-content-img');
const dotsContainer = document.querySelector('.carousel-dots');
let currentIndex = 0;

if (slides && images.length > 0 && dotsContainer) {
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
}



 document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.description-content');
    const dots = document.querySelectorAll('.description-dots-dot');
    
    if (!ele || dots.length === 0) return;

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
    
    if (!ele || dots.length === 0) return;

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
    
    if (!ele || dots.length === 0) return;

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
    
    if (!ele || dots.length === 0) return;

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
    
    if (!ele || dots.length === 0) return;

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
    
    if (!ele || dots.length === 0) return;

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
    
    if (!ele || dots.length === 0) return;

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
    
    if (!ele || dots.length === 0) return;

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

if (callBtn && modal && modalClose) {
callBtn.addEventListener("click", function() {
    modal.classList.add("active")
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('.main');
    if (header) header.style.filter = "blur(4px)";
    if (footer) footer.style.filter = "blur(4px)";
    if (main) main.style.filter = "blur(4px)";
})

modalClose.addEventListener("click", function() {
    modal.classList.remove("active")
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('.main');
    if (header) header.style.filter = "blur(0px)";
    if (footer) footer.style.filter = "blur(0px)";
    if (main) main.style.filter = "blur(0px)";
})
}