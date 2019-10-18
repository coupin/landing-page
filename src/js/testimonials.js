import template from 'lodash.template';

var testimonials = [
  {
    name: 'Wale H',
    comment: 'Coupin is easy to use and has a quick and easy layout. I recommend this.',
  },
  {
    name: 'Ada',
    comment: 'Very impressive app, with the fast lifestyle and hustle and bustle in Lagos, it\'s easy to miss out on great deals. Great concept and execution.',
  },
  {
    name: 'Anthony',
    comment: 'Really useful app, now I can have access to my favourite deals on the go!',
  },
  {
    name: 'Mike',
    comment: 'Fun to use and straight to the point. I get notifications of deals when I want them.',
  },
  {
    name: 'Ralph',
    comment: 'A trusted app in finding just the right deals. I\'ll defintely recommend it to anyone.',
  }
];

var testimonialString = '<div class="testimonial">' +
  '<div class="personal-info">' +
  '<div class="avatar"></div>' +
  '<p class="name"><%= name %></p>' +
  '</div>' +
  '<p class="content"><%= comment %></p>' +
  '</div>';

var testimonialsElement = document.querySelector('.testimonials');

testimonials.forEach(function (testimonial) {
  var testimonialElement = template(testimonialString)(testimonial);
  testimonialsElement.innerHTML += testimonialElement;
});
