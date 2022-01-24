function assessment() {
console.log(
'1. Вёрстка валидная +10.\n\
2. Вёрстка семантическая +20:\n\
    header, main, footer +2,\n\
    6 элементов section +2,\n\
    1 заголовок h1 +2,\n\
    5 заголовков h2 +2,\n\
    1 элемент nav (панель навигации) +2,\n\
    2 списка ul>li>a +2,\n\
    10 кнопок button +2,\n\
    2 input +2,\n\
    1 элемент textarea +2,\n\
    3 атрибута placeholder +2.\n\
3. Вёрстка соответствует макету +48:\n\
    блок header +6,\n\
    секция hero +6,\n\
    секция skills +6,\n\
    секция portfolio +6,\n\
    секция video +6,\n\
    секция price +6,\n\
    секция contacts +6,\n\
    блок footer +6.\n\
4. Требования к css + 12:\n\
    для построения сетки используются\n\
    флексы или гриды +2,\n\
    при уменьшении масштаба вёрстка размещается\n\
    по центру, а не сдвигается в сторону +2,\n\
    фон тянется на всю ширину страницы +2,\n\
    иконки добавлены любым способом в формате .svg +2,\n\
    изображения добавлены в формате .jpg +2,\n\
    есть favicon +2.\n\
5. Интерактивность, реализуемая через css +20:\n\
    плавная прокрутка по якорям +5,\n\
    ссылки в футере ведут на гитхаб автора проекта\n\
    и на страницу курса +5,\n\
    интерактивность включает в себя и изменение\n\
    цвета фона или цвета шрифта +5,\n\
    плавное изменение внешнего вида элемента при\n\
    наведении и клике + 5.\n\
Итого отметка = 110 баллов.\n\
Отзыв по пунктам ТЗ:\n\
Все пункты выполнены полностью!');
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


