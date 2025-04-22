const navbarBtn = document.querySelector(".mobile-line-menu");
const navbarMobil = document.querySelector(".mobile-line");

navbarBtn.addEventListener("click", function(e) {
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
}) 
