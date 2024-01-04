const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__menu__icon');

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
    menu.querySelectorAll('.header__item-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}


const progressTextElements = document.querySelectorAll('.circle__progress-text');

progressTextElements.forEach((textElement) => {
  const endPercentage = parseInt(textElement.textContent, 10);

  let currentPercentage = 0;

  const animationInterval = setInterval(() => {
    if (currentPercentage >= endPercentage) {
      clearInterval(animationInterval);
    } else {
      currentPercentage += 1;
      textElement.textContent = `${currentPercentage}%`;
    }
  }, 30);
});

document.addEventListener('DOMContentLoaded', function() {
  setup();
});

function setup() {
  let passage = document.getElementById('weirdtext');
  let rawtxt = passage.innerHTML;
  let len = rawtxt.length;
  let newtext = '';
  let isFirstWord = true;

  for (let i = 0; i < len; i++) {
    let rng = Math.floor(Math.random() * 5) + 1;
    let currentchar = rawtxt.charAt(i);
    let newchar;

    if (currentchar === ' ') {
      newchar = '<span class="space"></span>';
      isFirstWord = false;
    } else {
      let wordClass = isFirstWord ? '' : ' white-text';
      newchar = '<span class="effect' + rng + wordClass + '">' + currentchar + '</span>';
    }

    newtext += newchar;
  }

  passage.innerHTML = newtext;
}
