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



// Для функции смены языка окончание


// function changeImage(event) {
//     if (event.target.classList.contains('portfolio-buttons')) {
//       portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
//   }
// }




