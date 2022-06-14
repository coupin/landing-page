// control swiper for carousel
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true,
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

// control loading hot deals from server
const categoryContainer = document.querySelector('.category__list-item');
const loader = document.querySelector('.loader');

const populateRewards = (rewards) => {
  const rewardsList = [];
  let counter = 1;

  for (let item of rewards) {
    if (counter > 2) return;
    const text = `<div class="category__list__content__description-rewards">
          <p>${item.name}</p>
        </div>
        `;
    rewardsList.push(text);
    counter += 1;
  }

  return rewardsList.join('');
};

const fetchHotDeals = async () => {
  const hotDealsList = [];
  const response = await fetch(
    'https://coupin-staging.herokuapp.com/api/v1/merchant/deals'
  );
  const data = await response.json();
  const { hotlist } = data;

  for (let i = 0; i < hotlist.length; i++) {
    const text = `<div class="category__list__content">
          <div class="category__list__content__bg-image" style="background: url(${hotlist[i].id.merchantInfo.banner.url})">
            <div class="gradient"></div>
            <div class="category__list__content__bg-image__title">
              <h4>${hotlist[i].id.merchantInfo.companyName}</h4>
            </div>
          </div>
          <div class="category__list__content__description">
            ${populateRewards(hotlist[i].id.merchantInfo.rewards)}
            <div class="category__list__content__description-redeem">
              <p>Redeem rewards</p>
              <i class="las la-angle-right"></i>
            </div>
          </div>
        </div>`;

    hotDealsList.push(text);
  }

  loader.classList.remove('inline-block');
  loader.classList.add('hide');

  categoryContainer.innerHTML = hotDealsList.join('');
  categoryContainer.classList.remove('hide');
  categoryContainer.classList.add('flex');
};

// call API
fetchHotDeals();
