// control hambugrer navigation icon on mobile 
const hamburger = document.querySelector('.hamburger-icon')

hamburger.addEventListener('click', () => {
    const mobileNavBody = document.querySelector('.navigation-mobile__body');
    const hamburgerOne = document.querySelector('.hamburger-one');
    const hamburgerTwo = document.querySelector('.hamburger-two');

    hamburgerOne.classList.toggle('active')
    hamburgerTwo.classList.toggle('active')
    mobileNavBody.classList.toggle('hide');
})


// control active guide points links on customer page
const guideNavigations = document.querySelectorAll('.guide__main__instructions-item');
guideNavigations.forEach(nav => {
    nav.addEventListener('click', () => {
        // remove active class from all navigations
        guideNavigations.forEach(navigation => navigation.classList.remove('active'))
        // add active class to current navigation
        nav.classList.add('active')
    })
})

// control swiper for carousel 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    autoplay: {
        delay: 5000
    },
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    allowTouchMove: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

console.log(swiper)