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

import './index.html';

