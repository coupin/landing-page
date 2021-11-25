// importing favicons
import './favicons';

import './images/';

// styles
import './sass/global.scss';
import './sass/main.scss';

import './js/preload';
import './js/lazy-load';

// import './js/testimonials';

import feature from './js/feature';

feature.start();

window._scrollTo = function (id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};

window.dismissModal = function () {
  document.querySelector('#lions-den-modal').classList.add('hidden');
  document.querySelector('#youtube-frame').setAttribute('src', 'https://www.youtube.com/embed/rcm0XMAQ5As?autoplay=0&enablejsapi=1');
}

import './index.html';
import './terms.html';
import './privacy.html';

