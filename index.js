function assessment() {
console.log(
'1. Вёрстка соответствует макету +46:\n\
    header +6,\n\
    hero +6,\n\
    skills +6,\n\
    portfolio +6,\n\
    video +5,\n\
    price +6,\n\
    contacts +5,\n\
    footer +6.\n\
2. Нет полосы прокрутки +15:\n\
    от 1440рх до 768рх +5,\n\
    от 768рх до 480рх +5,\n\
    от 480рх до 320рх +5.\n\
3. Адаптивное меню +22:\n\
    при 768рх навигация скрывается, появляется бургер + 2,\n\
    при нажатии на бургер справа плавно появляется меню,\n\
    бургер-иконка меняется на крестик + 4,\n\
    высота меню = высоте экрана.При ширине экрана 768 - 620рх\n\
    вёрстка меню соответствует макету, когда экран становится\n\
    уже, меню занимает всю ширину экрана + 4,\n\
    при нажатии на крестик меню плавно скрывается, уезжая вправо,\n\
    крестик превращается в бургер + 4,\n\
    бургер, который при клике превращается в крестик,\n\
    создан без использования изображений + 2,\n\
    ссылки в меню работают, прокрутка по якорям плавная + 2,\n\
    при клике по ссылке(в меню) меню плавно скрывается,\n\
    крестик превращается в бургер-иконку + 4.\n\
    Баллы для сглаживания проверки +10.\n\
Итого отметка = 83 балла.');
}
assessment();

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
// openMenu.addEventListener('click', closeMenu);



// if (burger.classList.contains('open')) {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', closeMenu);
    }    
// }


