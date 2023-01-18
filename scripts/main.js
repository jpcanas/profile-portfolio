import myskillData from './skillData.js';

const cardContent = document.querySelector(".swiper-wrapper");

const menu = document.querySelector("#menu-icon");
const close = document.querySelector("#close")
const sideNav = document.querySelector(".nav-list")

cardContent.innerHTML = null;

//Skill Card Content 
let skillTag = myskillData.map((skill) => {
  let skillHTML = `
    <div class="swiper-slide">
      <div class="slide-header">
        <h3>${skill.title}</h3>
      </div>
      <div class="slide-main">
        <div class="percent">
          ${skill.percentage.map( mypercent => (
            `<div class="percentage">
              <p>${mypercent.percentText}</p>
              <img src=${mypercent.percentImg} alt=${mypercent.percentText}>
            </div>`)).join('\n\t\t\t')}
        </div>
        <div class="icon-program">
            ${skill.icons.map( icon => (
              `<div class="icon-main">
                <img src=${icon.iconSource} alt="${icon.iconText}">
                <p>${icon.iconText}</p>
              </div>`)).join('\n\t\t\t')}
        </div>
        <div class="skill-describe">
          <ul class="describe-list">
              ${skill.description.map( desc => (
                `<li>${desc}</li>\n`
              )).join('\n\t\t\t')}
          </ul>
        </div>
      </div>
    </div>
    `;

  return skillHTML;
})

skillTag .forEach( myskill => {
  // console.log(myskill)
  cardContent.innerHTML += myskill;
})


//side navbar
menu.addEventListener("click", () => {
  sideNav.classList.remove("hide")
})

close.addEventListener("click", () => {
  sideNav.classList.add("hide")
})


// swiper package 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 100,

  // If we need pagination
  pagination: { 
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // autoplay: {
  //   delay: 3000,
  // },
});