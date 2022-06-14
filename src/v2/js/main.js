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