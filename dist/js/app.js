const nav = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".header__nav");
const body = document.getElementsByTagName("body")[0];

function toggleMenu(){
    nav.classList.toggle("hamburger-menu--active");
    menu.classList.toggle('header__nav--active');
    body.classList.toggle("no-scroll");   

}


nav.addEventListener("click",toggleMenu)