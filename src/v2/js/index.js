const exploreBodyContainer = document.querySelector('.explore__body-item')
const loader = document.querySelector('.loader');

// function calls 
const populateRewards = (rewards) => {
  
  const rewardsList = [];
  let counter = 1;

  for(let item of rewards) {
    if(counter > 2) return
    const text = `<div class="explore__body__content__description-rewards">
        <p>${item.name}</p>
      </div>
      `
      rewardsList.push(text);
      counter += 1;
  }

  return rewardsList.join('')
}

const fetchFeatured = async () => {
  const featuredList = [];
  const response = await fetch('https://coupin-staging.herokuapp.com/api/v1/merchant/deals');
  const data = await response.json();
  const { featured } = data;

  for (let prop in featured) {
    const text = `<div class="explore__body__content">
        <div class="explore__body__content__bg-image" style="background-image: url(${featured[prop].merchantInfo.banner.url})">
          <div class="gradient"></div>
          <div class="explore__body__content__bg-image__title">
            <h4>${featured[prop].merchantInfo.companyName}</h4>
          </div>
        </div>
        <div class="explore__body__content__description">
          ${populateRewards(featured[prop].merchantInfo.rewards)}
          <div class="explore__body__content__description-redeem">
            <p>Redeem rewards</p>
            <i class="las la-angle-right"></i>
          </div>
        </div>
      </div>`

    featuredList.push(text)
  }



  loader.classList.remove('inline-block');
  loader.classList.add('hide');

  exploreBodyContainer.innerHTML = featuredList.join('')
  exploreBodyContainer.classList.remove('hide');
  exploreBodyContainer.classList.add('flex')
}

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


// make call to API
fetchFeatured()
