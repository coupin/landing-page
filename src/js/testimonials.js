import template from 'lodash.template';

var testimonials = [
  {
    avatar: 'images/wale.jpg',
    name: 'Wale H',
    comment: 'Coupin is easy to use and has a quick and easy layout. I recommend this.',
  },
  {
    avatar: 'images/ada.jpg',
    name: 'Ada',
    comment: 'Very impressive app, with the fast lifestyle and hustle and bustle in Lagos, it\'s easy to miss out on great deals. Great concept and execution.',
  },
  {
    avatar: 'images/anthony.jpg',
    name: 'Anthony',
    comment: 'Really useful app, now I can have access to my favourite deals on the go!',
  },
  {
    avatar: 'images/mike.jpg',
    name: 'Mike',
    comment: 'Fun to use and straight to the point. I get notifications of deals when I want them.',
  },
  {
    avatar: 'images/alex.jpg',
    name: 'Alex',
    comment: 'A trusted app in finding just the right deals. I\'ll defintely recommend it to anyone.',
  }
];

var testimonialString = '<div class="testimonial">' +
  '<div class="personal-info">' +
  '<img class="avatar" src="<%= avatar %>" alt="<%= name %> testimonial image">' +
  '<p class="name"><%= name %></p>' +
  '</div>' +
  '<p class="content"><%= comment %></p>' +
  '</div>';

var testimonialsElement = document.querySelector('.testimonials');

testimonials.forEach(function (testimonial) {
  var testimonialElement = template(testimonialString)(testimonial);
  testimonialsElement.innerHTML += testimonialElement;
});
