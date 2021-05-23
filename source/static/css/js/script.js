// let users = []
// const renderUsers = (obj, id) => {
//     return `
//     <div class="comments__card-name">
//                 <h3 class="commments__card-title">Gary</h3>

//             </div>
//             <p class="comments__description">${obj.body}</p>

//     </div>`

// }

// const loadUsers = () => {
//     fetch('https://jsonplaceholder.typicode.com/comments?_start=1&_limit=3')
//         .then((res) => res.json())
//         .then(array => {
//             console.log(array)
//             array.map((item, id) => {
//                 let el = renderUsers(item)
//                 users.push(el)
//             })
//         })
//         .then(() => {
//             users.join('')
//             document.getElementById('cards').innerHTML = users
//         })
// }

// loadUsers()
// header
let showBurgerMenuBtn = document.querySelector(".burger-menu-show");
let hideBurgerMenuBtn = document.querySelector(".burger-menu-hide");
let toggleHideClass = document.querySelector(".hide");
let burgerMenu = document.querySelector("#burgerMenu");
let burgerMenuLink = document.querySelectorAll(".burger-menu__link");

showBurgerMenuBtn.addEventListener("click", function () {
    toggleBurgerBtns();
    showBurgerMenu();
});

hideBurgerMenuBtn.addEventListener("click", function () {
    toggleBurgerBtns();
    hideBurgerMenu();
});

for (var i = 0; i < burgerMenuLink.length; i++) {
    burgerMenuLink[i].addEventListener("click", function () {
        hideBurgerMenu();
        toggleBurgerBtns();
    });
}

function toggleBurgerBtns() {
    showBurgerMenuBtn.classList.toggle("hide");
    hideBurgerMenuBtn.classList.toggle("hide");
}

function showBurgerMenu() {
    burgerMenu.style.transform = 'translateX(-100%)';
}

function hideBurgerMenu() {
    burgerMenu.style.transform = 'translateX(100%)';
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    simulateTouch: false,

    slidesPerView: 1,

    watchOverflow: true,

    centeredSlides: true,


    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    speed: 800,

    effect: 'coverflow',

    coverflowEffect: {
        rotate: 0,
        stretch: 50,
    },
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
        '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();



$(function () {
    let header = $('.header-wrapper');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1 && $('.main-page').width() > 940) {
            header.addClass('header_fixed');
            $('.main-page').css({
                'paddingTop': hederHeight + 'px', // делаем отступ у main-page, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('.main-page').css({
                'paddingTop': 0, // удаляю отступ у main-page, равный высоте шапки
            });
        }
    });

});

// MENU PAGE 

let foodImageCurtain = document.getElementsByClassName("modal-img-curtain");
let foodImage = document.getElementsByClassName("menu__card-img");
let hideMenuModal = document.getElementById("hideMenuModal");

for (let i = 0; i < foodImageCurtain.length; i++) {
    foodImage[i].addEventListener("click", function () {
        foodImageCurtain[i].classList.add('menu__card-img-modal');
        foodImage[i].classList.add('menu__card-img-size');
        hideMenuModal.style.display = 'block';
    });

    hideMenuModal.addEventListener("click", function () {
        foodImageCurtain[i].classList.remove('menu__card-img-modal');
        foodImage[i].classList.remove('menu__card-img-size');
        hideMenuModal.style.display = 'none';
    });
}

// EVENT PAGE

let eventImageCurtain = document.getElementsByClassName("event-modal-img-curtain");
let eventImage = document.getElementsByClassName("dailyCard__img");
let hideEventModal = document.getElementById("hideEventModal");

for (let i = 0; i < eventImageCurtain.length; i++) {
    eventImage[i].addEventListener("click", function () {
        eventImageCurtain[i].classList.add('event__card-img-modal');
        eventImage[i].classList.add('event__card-img-size');
        hideEventModal.style.display = 'block';
    });

    hideEventModal.addEventListener("click", function () {
        eventImageCurtain[i].classList.remove('event__card-img-modal');
        eventImage[i].classList.remove('event__card-img-size');
        hideEventModal.style.display = 'none';
    });
}

// active menu
let menuLink = document.getElementsByClassName("menu__link");

for (let i = 0; i < menuLink.length; i++) {
    menuLink[0].addEventListener("click", function () {
        menuLink[0].classList.add('active-menu-link');
        menuLink[1].classList.remove('active-menu-link');
        menuLink[2].classList.remove('active-menu-link');
        menuLink[3].classList.remove('active-menu-link');
        menuLink[4].classList.remove('active-menu-link');
        menuLink[5].classList.remove('active-menu-link');
        menuLink[6].classList.remove('active-menu-link');
        menuLink[7].classList.remove('active-menu-link');
    });
    menuLink[1].addEventListener("click", function () {
        menuLink[0].classList.remove('active-menu-link');
        menuLink[1].classList.add('active-menu-link');
        menuLink[2].classList.remove('active-menu-link');
        menuLink[3].classList.remove('active-menu-link');
        menuLink[4].classList.remove('active-menu-link');
        menuLink[5].classList.remove('active-menu-link');
        menuLink[6].classList.remove('active-menu-link');
        menuLink[7].classList.remove('active-menu-link');
    });
    menuLink[2].addEventListener("click", function () {
        menuLink[0].classList.remove('active-menu-link');
        menuLink[1].classList.remove('active-menu-link');
        menuLink[2].classList.add('active-menu-link');
        menuLink[3].classList.remove('active-menu-link');
        menuLink[4].classList.remove('active-menu-link');
        menuLink[5].classList.remove('active-menu-link');
        menuLink[6].classList.remove('active-menu-link');
        menuLink[7].classList.remove('active-menu-link');
    });
    menuLink[3].addEventListener("click", function () {
        menuLink[0].classList.remove('active-menu-link');
        menuLink[1].classList.remove('active-menu-link');
        menuLink[2].classList.remove('active-menu-link');
        menuLink[3].classList.add('active-menu-link');
        menuLink[4].classList.remove('active-menu-link');
        menuLink[5].classList.remove('active-menu-link');
        menuLink[6].classList.remove('active-menu-link');
        menuLink[7].classList.remove('active-menu-link');
    });
    menuLink[4].addEventListener("click", function () {
        menuLink[0].classList.remove('active-menu-link');
        menuLink[1].classList.remove('active-menu-link');
        menuLink[2].classList.remove('active-menu-link');
        menuLink[3].classList.remove('active-menu-link');
        menuLink[4].classList.add('active-menu-link');
        menuLink[5].classList.remove('active-menu-link');
        menuLink[6].classList.remove('active-menu-link');
        menuLink[7].classList.remove('active-menu-link');
    });
    menuLink[5].addEventListener("click", function () {
        menuLink[0].classList.remove('active-menu-link');
        menuLink[1].classList.remove('active-menu-link');
        menuLink[2].classList.remove('active-menu-link');
        menuLink[3].classList.remove('active-menu-link');
        menuLink[4].classList.remove('active-menu-link');
        menuLink[5].classList.add('active-menu-link');
        menuLink[6].classList.remove('active-menu-link');
        menuLink[7].classList.remove('active-menu-link');
    });
    menuLink[6].addEventListener("click", function () {
        menuLink[0].classList.remove('active-menu-link');
        menuLink[1].classList.remove('active-menu-link');
        menuLink[2].classList.remove('active-menu-link');
        menuLink[3].classList.remove('active-menu-link');
        menuLink[4].classList.remove('active-menu-link');
        menuLink[5].classList.remove('active-menu-link');
        menuLink[6].classList.add('active-menu-link');
        menuLink[7].classList.remove('active-menu-link');
    });
    menuLink[7].addEventListener("click", function () {
        menuLink[0].classList.remove('active-menu-link');
        menuLink[1].classList.remove('active-menu-link');
        menuLink[2].classList.remove('active-menu-link');
        menuLink[3].classList.remove('active-menu-link');
        menuLink[4].classList.remove('active-menu-link');
        menuLink[5].classList.remove('active-menu-link');
        menuLink[6].classList.remove('active-menu-link');
        menuLink[7].classList.add('active-menu-link');
    });
}