const nav = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".header__nav");

function toggleMenu(){
    nav.classList.toggle("hamburger-menu--active");
    menu.classList.toggle('header__nav--active');
}


nav.addEventListener("click",toggleMenu)