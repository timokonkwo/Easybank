/*========= Show Menu ===========*/
const navMenu = document.querySelector('.nav__menu-wrapper'),
    navToggle = document.querySelector('.nav__toggle'),
    navClose = document.querySelector('.nav__close');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
})