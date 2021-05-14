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

showBurgerMenuBtn.addEventListener("click", function() {
    toggleBurgerBtns();
    showBurgerMenu();
});

hideBurgerMenuBtn.addEventListener("click", function() {
    toggleBurgerBtns();
    hideBurgerMenu();
});

for (var i = 0; i < burgerMenuLink.length; i++) {
    burgerMenuLink[i].addEventListener("click", function() {
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


$(function () {
    Carousel.init($("#carousel"));
    $("#carousel").init();
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



$(function() {
    let header = $('.header-wrapper');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('.main-page').css({
          'paddingTop': hederHeight+'px' // делаем отступ у main-page, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('.main-page').css({
        'paddingTop': 0 // удаляю отступ у main-page, равный высоте шапки
       })
      }
    });
});