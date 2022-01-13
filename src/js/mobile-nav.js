const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const explore = document.querySelector('#explore-mobile');
const becomeMerchBtn = document.querySelector('#merchant-dropdown-mobile');
const becomeMerchItems = document.querySelector('#merchant-dropdown-items-mobile');

explore.addEventListener('click', () => {
    mobileNav.classList.toggle('show-mobile');
})

becomeMerchBtn.addEventListener('click', () => {
    becomeMerchItems.classList.toggle('hide')
})

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show-mobile');
})