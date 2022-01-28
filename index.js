function assessment() {
  console.log('отметка');
}
assessment();
import i18Obj from './translate.js';
// Бургер-меню
// Взяли в константу иконку бургера
const burger = document.querySelector('.header-burger');
// Взяли в константу класс нашей навигации
const openMenu = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__list-link');
// Если класс иконки существует, то делаем то, что в фигурных скобках 
if (burger) {
  // А именно.
  // Пишем функции, которая выполнится при клике на бургер
  burger.addEventListener('click', function () {
    // Функция добавит класс .open для бургера и для навигации
    // В стилях css будем описывать его свойства, добавляя к класса
    // навигации и бургера без пробела (header__burger.open и header__nav.open)
    burger.classList.toggle('open');
    openMenu.classList.toggle('open');
    // Также добавляем класс .lock для body, чтобы запретить ему скролл
    // при открытом меню
    document.body.classList.toggle('lock');
  });

};
// Теперь, чтобы меню закрывалось при клике на ссылку
// Делаем проверку
// Если у иконки бургера активен статус .open, то удаляем
// при клике на ссылку этот класс .open и удаляем запрет
// скролла для body


function closeMenu() {
  burger.classList.remove('open');
  openMenu.classList.remove('open');
  document.body.classList.remove('lock');
};
// openMenu.addEventListener('click', closeMenu);  делегирование



// if (burger.classList.contains('open')) {
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', closeMenu);
}
// }
// Для функции смены изображений старт
const portfolioButtons = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-img');
portfolioButtons.addEventListener('click', function changeImage(event) {
  let season = event.target.dataset.season;
  if (event.target.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`);
  }
});
// Для функции смены изображений окончание
// Для функции кеширования старт
const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach(elem => {
  function preloadSummerImages() {
    for (let i = 1; i <= 6; i++) {
      const image = new Image();
      image.src = `./assets/img/${elem}/${i}.jpg`;
    }
  }
  preloadSummerImages();
})
// Для функции кеширования окончание
// Для функции смены языка старт
const langAttr = document.querySelectorAll('[data-i18]');
const switchLang = document.querySelector('.switch');
const langRu = document.querySelector('.switch-ru');
const langEn = document.querySelector('.switch-en');
function translateRu() {
  langEn.classList.remove('active');
  langRu.classList.add('active');
  langAttr.forEach((el) => {
    el.textContent = i18Obj['ru'][el.dataset.i18];
    if (el.placeholder) {
    el.placeholder = i18Obj['ru'][el.dataset.i18];
    el.textContent = ''
    };
  });
};
langRu.addEventListener('click', translateRu);

function translateEn() {
  langRu.classList.remove('active');
  langEn.classList.add('active');
  langAttr.forEach((el) => {
    el.textContent = i18Obj['en'][el.dataset.i18];
    if (el.placeholder) {
    el.placeholder = i18Obj['en'][el.dataset.i18];
      el.textContent = ''
    };
  });
};
langEn.addEventListener('click', translateEn);

// 1 вариант:   switchLang.addEventListener('click', function (lang) {
//   langAttr.forEach((el) => {
//     el.textContent = i18Obj[lang][el.dataset.i18];
//   });
// });

// 2 вариант:   const getTranslate = function (lang) {
//   langAttr.forEach((el) => {
//     el.textContent = i18Obj[lang][el.dataset.i18];
//   });
// };
// langRu.addEventListener('click', getTranslate('ru'));
// langEn.addEventListener('click', getTranslate('en'));

//вывот значения дата-атрибуда    const lan = document.querySelector('[data-i18]');
// console.log(lan.dataset.i18);

// Для функции смены языка окончание
// Для смены темы отображения старт
const lightTheme = [...document.querySelectorAll('body, .theme, .section-title, .skills-item, .portfolio-btn, .price-item-title, .price-item-text, .header__list, .header__list-link')];
const switchTheme = document.querySelector('.theme');                        
switchTheme.addEventListener('click', function themeFunc() {
lightTheme.forEach((el) => {
  el.classList.toggle('light-theme');
});
});
// Для смены темы отображения окончание














// function changeImage(event) {
//     if (event.target.classList.contains('portfolio-buttons')) {
//       portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
//   }
// }




