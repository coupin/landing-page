const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const explore = document.querySelector('#explore-mobile');

explore.addEventListener('click', () => {
    mobileNav.classList.toggle('show-mobile');
})

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show-mobile');
})