function assessment() {
  console.log('отметка');
}
assessment();
import i18Obj from './translate.js';
// Для сохранения настроек пользователя (язык и тема) старт
let lang = 'en';
let theme = 'dark';
function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    translate(lang);
  }
  if (localStorage.getItem('theme') === 'light') {
    const theme = localStorage.getItem('theme');
    changeThemeFunc();
  }
}
window.addEventListener('load', getLocalStorage);
// Для сохранения настроек пользователя (язык и тема) окончание

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
const portfolioBtns = [...document.querySelectorAll('[data-season]')];

// autumn.classList.add('active');
// console.log();

portfolioButtons.addEventListener('click', function changeImage(event) {
  let season = event.target.dataset.season;
  if (event.target.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`);
    portfolioBtns.forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');    
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


function translate(_lang) {
  lang = _lang;
  if (_lang === 'ru') {
  langRu.classList.add('active');
  langEn.classList.remove('active');
  }
  else if (_lang === 'en') {
  langRu.classList.remove('active');
  langEn.classList.add('active');
  }
langAttr.forEach((el) => {
    el.textContent = i18Obj[_lang][el.dataset.i18];
    if (el.placeholder) {
    el.placeholder = i18Obj[_lang][el.dataset.i18];
    el.textContent = ''
    };
  });
};
langEn.addEventListener('click', () => translate('en'));
langRu.addEventListener('click', () => translate('ru'));


// 2 вариант:
// function translateRu() {
//   langEn.classList.remove('active');
//   langRu.classList.add('active');
//   langAttr.forEach((el) => {
//     el.textContent = i18Obj['ru'][el.dataset.i18];
//     if (el.placeholder) {
//     el.placeholder = i18Obj['ru'][el.dataset.i18];
//     el.textContent = ''
//     };
//   });
// };
// langRu.addEventListener('click', translateRu);

// function translateEn() {
//   langRu.classList.remove('active');
//   langEn.classList.add('active');
//   langAttr.forEach((el) => {
//     el.textContent = i18Obj['en'][el.dataset.i18];
//     if (el.placeholder) {
//     el.placeholder = i18Obj['en'][el.dataset.i18];
//       el.textContent = ''
//     };
//   });
// };
// langEn.addEventListener('click', translateEn);

//вывод значения дата-атрибута:
// const lan = document.querySelector('[data-i18]');
// console.log(lan.dataset.i18);
// Для функции смены языка окончание

// Для смены темы отображения старт
const elementsForTheme = [...document.querySelectorAll('body, .theme, .section-title, .skills-item, .portfolio-btn, .price-item-title, .price-item-text, .header__list, .header__list-link')];
const switchTheme = document.querySelector('.theme');

function changeThemeFunc() {
theme = theme === 'dark' ? 'light' : 'dark';
elementsForTheme.forEach((el) => {
  el.classList.toggle('light-theme');
});
};
switchTheme.addEventListener('click', changeThemeFunc);
// switchTheme.addEventListener('click', function changeThemeFunc() {
// theme = theme === 'dark' ? 'light' : 'dark';
// elementsForTheme.forEach((el) => {
//   el.classList.toggle('light-theme');
// });
// });
// Для смены темы отображения окончание


// Анимация кнопок старт
var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.querySelectorAll('.bubbly');
for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
// Анимация кнопок окончание




// function changeImage(event) {
//     if (event.target.classList.contains('portfolio-buttons')) {
//       portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
//   }
// }
//  video-controls-play-button класс для кнопки плэй в контролся


// Видеоплеер старт
const videoItem = document.querySelector('.video-item');
const video = document.querySelector('.video');
const playBtn = document.querySelector('.video-play');
const videocontrols = document.querySelector('.video-controls-item');
const videoControlsPlayBtn = document.querySelector('.video-controls-play-button')
const controlsPlayRate = document.querySelector('.video-controls-play-rate');
const controlsVolumeRate = document.querySelector('.video-controls-volume-rate');
const rates = document.querySelectorAll('.rate');
const controlsVolumeBtn = document.querySelector('.volume-controls-button');
const controlsFullscreenBtn = document.querySelector('.fullscreen-controls-button');
const currentTimeVideo = document.querySelector('.current-time');
const durationVideo = document.querySelector('.duration');
let volume = controlsVolumeRate.value;
let isVolumeMuted = false;
let isVideoFullscreen = false;
let timeOutMouse;
// Смена отображения кнопки play controls-volume старт
controlsVolumeBtn.addEventListener('click', () => {
  isVolumeMuted = !isVolumeMuted;
  if (isVolumeMuted) {
    controlsVolumeBtn.classList.remove('fa-volume');
    controlsVolumeBtn.classList.remove('fa-volume-high');
    controlsVolumeBtn.classList.add('fa-volume-slash');
    controlsVolumeRate.value = 0;
    video.volume = 0;
    controlsVolumeRate.style.setProperty('--value', 0);
  }
  else {
    controlsVolumeRate.value = volume;
    video.volume = volume / 10;
    controlsVolumeRate.style.setProperty('--value', controlsVolumeRate.value);
    controlsVolumeBtn.classList.remove('fa-volume-slash');
    controlsVolumeBtn.classList.add('fa-volume');
  }  
}
);
controlsVolumeRate.addEventListener('input', () => {
  video.volume = controlsVolumeRate.value / 10;   /* Громкость */
  volume = controlsVolumeRate.value;
  if (controlsVolumeRate.value >= 8) {
    controlsVolumeBtn.classList.remove('fa-volume-slash');
    controlsVolumeBtn.classList.remove('fa-volume');
    controlsVolumeBtn.classList.add('fa-volume-high');
  }
  else if (controlsVolumeRate.value < 0.2) {
    controlsVolumeBtn.classList.remove('fa-volume');
    controlsVolumeBtn.classList.remove('fa-volume-high');
    controlsVolumeBtn.classList.add('fa-volume-slash');
  }
  else {
    controlsVolumeBtn.classList.remove('fa-volume-high');
    controlsVolumeBtn.classList.remove('fa-volume-slash');
    controlsVolumeBtn.classList.add('fa-volume');
  }
}
);
// Смена отображения кнопки play controls-volume окончание
  
// Прогресс для ползунков видео и громкости старт
for (let el of rates) {
  el.style.setProperty('--value', el.value);
  el.style.setProperty('--min', el.min == '' ? '0' : el.min);
  el.style.setProperty('--max', el.max == '' ? '100' : el.max);
  el.addEventListener('input', () => el.style.setProperty('--value', el.value));  
}
// Прогресс для ползунков видео и громкости окончание

// воспроизведение видео старт
videocontrols.classList.add('active');
video.addEventListener('mousemove', () => {
  if (!video.paused) {
    clearTimeout(timeOutMouse);
    videocontrols.classList.add('active');
    timeOutMouse = setTimeout(() => { videocontrols.classList.remove('active') }, 2000);
  }
    // clearTimeout(timeOutMouse);
    });
function playVideo() {
  if (video.paused) {
    videoControlsPlayBtn.classList.toggle('fa-play');
    videoControlsPlayBtn.classList.toggle('fa-pause');
    playBtn.classList.toggle('hidden');
    videocontrols.classList.remove('active');
    video.play();    
  } else {
    videoControlsPlayBtn.classList.toggle('fa-play');
    videoControlsPlayBtn.classList.toggle('fa-pause');
    playBtn.classList.toggle('hidden');
    videocontrols.classList.add('active');
    clearTimeout(timeOutMouse);
    video.pause();
  }
}
video.addEventListener('click', playVideo);
videoControlsPlayBtn.addEventListener('click', playVideo);
playBtn.addEventListener('click', playVideo);

video.addEventListener('ended', () => {
  videoControlsPlayBtn.classList.toggle('fa-play');
  videoControlsPlayBtn.classList.toggle('fa-pause');
  playBtn.classList.toggle('hidden');
  videocontrols.classList.add('active');
  controlsPlayRate.value = 0;
  controlsPlayRate.style.setProperty('--value', 0);
});
// воспроизведение видео окончание

// Ползунок для видео старт
video.addEventListener('timeupdate', () => {
  controlsPlayRate.value = ((video.currentTime * 100) / video.duration).toFixed(2);
  controlsPlayRate.style.setProperty('--value', controlsPlayRate.value);
  let curTime = Math.floor(video.currentTime);
  currentTimeVideo.textContent = curTime < 10 ? `0:0${curTime}` : `0:${curTime}`;  /*для вывода текущего времени видео*/
// вместо 2ух строчек вверху можно записать currentTimeVideo.textContent = (Video.currentTime).toFixed(0).padStart(2, '0');
})
controlsPlayRate.addEventListener('input', () => {
  video.currentTime = (controlsPlayRate.value * video.duration) / 100;
})
// Ползунок для видео окончание

// Полноэкранный режим старт
controlsFullscreenBtn.addEventListener('click', () => {
  isVideoFullscreen = !isVideoFullscreen;
  if (isVideoFullscreen) {
    controlsFullscreenBtn.classList.toggle('fa-expand');
    controlsFullscreenBtn.classList.toggle('fa-compress');
    videoItem.requestFullscreen();
  } else {
    controlsFullscreenBtn.classList.toggle('fa-expand');
    controlsFullscreenBtn.classList.toggle('fa-compress');
    document.exitFullscreen();
  }
});
// Полноэкранный режим окончание

// Видеоплеер окончание
