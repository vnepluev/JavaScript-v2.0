// = это не равно, а присвоить
document.getElementById('header').innerHTML = 'Задание №1.'; // старый формат обращения к элементам

// новый формат записи, обращение через css стили
document.querySelector('h2.header').innerHTML = 'Тренируем обращение к содержимому тегов'; // берет первый элемент на странице h2
document.querySelector('.header').innerHTML = 'Тренируем обращение к содержимому тегов';

document.querySelector('#one').innerHTML = 'текст рыба'; //в современом js используем эту команду
document.getElementById('one').innerHTML = 'текст рыба';

// при вызове конструкций выше, браузер каждый раз перебирает элементы документа
// в поисках нужного, чтобы это устранить используеются
let b; // var b - устарело
let a = document.querySelector('#one');

let c; // операция называется объявление 
c = document.querySelector('#one'); // операция присвоения, их можно объединить

c.innerHTML = 'Текст рыба 1';