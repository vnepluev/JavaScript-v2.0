// Task 1
// Напишите функцию t1, которая принимает два аргумента и выводит в .out-1 случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t1(min, max) {
    const out1 = document.querySelector('.out-1');
    out1.textContent = Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector('.b-1').addEventListener('click', function () {
    t1(120, 140);
})


// Task 2.

//Напишите функцию t2, которая принимает три аргумента (число от, число до и блок, в который нужно вывести данные) и выводит в указанный блок случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-2. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t2(min, max, block) {
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    block.textContent = rand;
}

document.querySelector('.b-2').addEventListener('click', function () {
    const out2 = document.querySelector('.out-2');
    t2(120, 140, out2); // функция должна вывести случайное целое от 120 до 140 в блок out-2
})



// Task 3.
//Напишите функцию t3, которая принимает два аргумента (число от, число до ) и выводит в блок .out-3 случайное целое число от первого аргумента(включительно) до второго(включительно). Задайте значение по умолчанию для min число 0 для max число 100. Функция запускается по кнопке .b-3. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t3(min = 0, max = 100) {
    const out3 = document.querySelector('.out-3');
    const rand = Math.floor(Math.random() * (max - min + 1) - min);
    out3.textContent = rand;
}

document.querySelector('.b-3').addEventListener('click', function () {
    t3();
})

// Task 4
// Напишите функцию t4, которая делит число a на b и результат выводит в out-4. Если b равно нулю, то в out-4 выводится аргумент c.

function t4(a, b, c) {
    const out4 = document.querySelector('.out-4');
    let res = a / b;
    if (res === 0) {
        res = c;
    }
    out4.textContent = res;
}

document.querySelector('.b-4').addEventListener('click', function () {
    t4(0, 12, false);
})


// Task 5
// Напишите функцию t5, которая делит число a на b и результат выводит в out-5. Если b равно нулю, то в out-5 выводится аргумент c, который по умолчанию равен нулю.

function t5(a, b, c = 0) {
    const out5 = document.querySelector('.out-5');
    let res = a / b;
    if (b === 0) {
        res = c;
    }
    out5.textContent = res;
}

document.querySelector('.b-5').addEventListener('click', function () {
    t5(7, 12, false);
})



// Task 6
// Давайте напишем функцию t6, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. 

const out6 = document.querySelector('.out-6');

function t6(arr, block) {
    block.textContent = Array.from(arr).join(" ");
}

document.querySelector('.b-6').addEventListener('click', function () {
    t6([99, 44, 55, 66], out6);
})



// Task 7
// Давайте напишем функцию t7, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Задайте аргумент arr равный по умолчанию пустому массиву. Добавьте внутрь функции проверку на массив аргумента arr. Если arr не массив, то в block выводим false. 

const out7 = document.querySelector('.out-7');

function t7(arr = [], block) {
    if (Array.isArray(arr)) {
        block.textContent = Array.from(arr).join(" ");
    } else {
        block.textContent = false;
    }
        
}

document.querySelector('.b-7').addEventListener('click', function () {
    t7(['1', '2', '3'], out7);
})



// Task 8
// Давайте напишем функцию t8, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. 

const out8 = document.querySelector('.out-8');

function t8(block, text) {
    block.textContent = text.trim().toLowerCase();
}

document.querySelector('.b-8').addEventListener('click', function () {
    t8(out8, ' HelLO wORLd       ');
})




// Task 9
// Давайте напишем функцию t9, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Зададим значение по умолчанию для text - пустую строку, это позволит нам избежать ошибок, если данный аргумент упустили, и добавим в функцию проверку - если block не существует, то функция ничего не выводит.


const out9 = document.querySelector('.out-9');

function t9(text = '', block) {
    if (block) {
        // if (block !== undefined) {...}
        block.textContent = text.trim().toLowerCase();
    }
}

document.querySelector('.b-9').addEventListener('click', function () {
    t9(' HelLO wORLd       ', out9);
})




// Task 10
// Напишите функцию, t10, которая выводит в out-10 количество переданных ей аргументов (число).

const out10 = document.querySelector('.out-10');

function t10() {
    out10.textContent = arguments.length;
}

document.querySelector('.b-10').addEventListener('click', function () {
    t10(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 11
// Напишите функцию, t11, которая выводит в out-11 cумму переданных ей аргументов (число). Используем arguments.

const out11 = document.querySelector('.out-11');

function t11() {
    // ES2015
    const args = Array.from(arguments);
    // const args = [...arguments];
    const sum = args.reduce( (prev, value) => prev + value );
    out11.textContent = sum;
}

document.querySelector('.b-11').addEventListener('click', function () {
    t11(33, 22, 44, 11, 55, 66, 11, 66);
})

// Task 12
// Напишите функцию, t12, которая выводит в out-12 cумму переданных ей аргументов (число). Используем rest.

const out12 = document.querySelector('.out-12');

function t12(...args) {
    out12.textContent = args.reduce((prev, value) => prev + value);
}

document.querySelector('.b-12').addEventListener('click', function () {
    t12(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 13
// Напишите функцию, t13, которая выводит в out-13 массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out13 = document.querySelector('.out-13');

function t13(arr, funcArg) {
    funcArg(arr);
}

// функции для вывода уже заготовлены
function showArrSpace(arr) {
    out13.innerHTML = arr.join(' ');
}

function showArrUnderscore(arr) {
    out13.innerHTML = arr.join('_');
}

document.querySelector('.b-13').addEventListener('click', function () {
    t13([3, 4, 5], showArrSpace);
    // попробуйте также вместо showArrSpace поставить showArrUnderscore
})


// Task 14
// Напишите функцию, t14, которая выводит в блок block (переданный как аргумент) массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out14 = document.querySelector('.out-14');

function t14(arr, funcArg, block) {
    funcArg(arr, block);
}

// функции для вывода уже заготовлены
function showArrSpace2(arr, block) {
    // вывод в блок пишите как в предыдущем примере
    block.textContent = arr.join(" ");
}

function showArrUnderscore2(arr, block) {
    // вывод в блок пишите как в предыдущем примере
    block.textContent = arr.join("_");
}

document.querySelector('.b-14').addEventListener('click', function () {
    t14([3, 4, 5], showArrSpace2, out14);
    // попробуйте также вместо showArrSpace2 поставить showArrUnderscore2
})


// Task 15
// Напишите функцию, t15, которая в зависимости от четности аргумента num запускает функцию even, или odd.

const out15 = document.querySelector('.out-15');

function t15(num, even, odd) {
    (num % 2) ? even() : odd();
}

function showOne() {
    out15.innerHTML = 'even';
}

function showTwo() {
    out15.innerHTML = 'odd';
}


document.querySelector('.b-15').addEventListener('click', function () {
    t15(5, showOne, showTwo);
})