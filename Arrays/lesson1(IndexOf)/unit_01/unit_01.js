// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью indexOf и ищет данный элемент в массиве a1. Выводит в out-1 результат работы.
// Как тестируется - ввожу числа и проверяю результат.


let a1 = [4, 12, 4, 2, 15, 98];

const f1 = () => {
	const i1 = +document.querySelector('.i-1').value;
	const out1 = document.querySelector('.out-1');
	
	out1.textContent = a1.indexOf(i1);
}



// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 и с помощью indexOf и ищет данный элемент в массиве a2. Выводит в out-2  false, если такого элемента нет в массиве, и ИНДЕКС элемента если есть.
// Как тестируется - ввожу чис


let a2 = [4, 12, 4, 2, 15, 98];

const f2 = () => {
	const i2 = +document.querySelector('.i-2').value;
	const out2 = document.querySelector('.out-2');
	out2.textContent = a2.indexOf(i2) >= 0 ? a2.indexOf(i2) : false;
}


// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из i-3 и с помощью indexOf и ищет данный элемент в массиве a3. Выводит в out-3  false, если такого элемента нет в массиве, и true если есть.
// Как тестируется - ввожу числа и проверяю результат.


let a3 = [4, 12, 4, 2, 15, 98];

const f3 = () => {
	const i3 = +document.querySelector('.i-3').value;
	const out3 = document.querySelector('.out-3');
	out3.textContent = a3.indexOf(i3) >= 0;
}


// TASK 04
// По нажатию b-4 выполняется функция f4. Функция принимает 2 параметра, первый - массив, второй элемент. Функция должна с помощью indexOf найти и вывести в out-4 индекс искомого элемента в массиве a4 или -1 если элемента в массиве нет. Протестируйте задачу на строке '2' и числе 2. Сделайте выводы.


let a4 = [1, '1', 2, '2', '3'];

const f4 = (arr, elem) => {
	const out4 = document.querySelector('.out-4');
	out4.textContent = arr.indexOf(elem);
}



// TASK 05
// По нажатию b-5 выполняется функция f5. Функция считывает значение из i-5-1 и индекс с которого начинается поиск в массиве с i-5-2 и с помощью indexOf и ищет данный элемент в массиве a5 c позиции указанной в i-5-2. Выводит в out-5 индекс если он есть в массиве, или -1 если нет.
// Введите пары и изучите поведение
// число 33 и индекс старта 2
// число 33 и индекс старта 0
// число 44 и индекс старта 50
// число 44 и индекс старта -3


let a5 = [22, 33, 44, 55, 66, 77, 88, 33, 44, 55, 66, 77];

const f5 = () => {
	const i51 = +document.querySelector('.i-5-1').value;
	const i52 = +document.querySelector('.i-5-2').value;
	const out5 = document.querySelector('.out-5');
	out5.textContent = a5.indexOf(i51, i52);
}



// TASK 06
// По нажатию b-6 выполняется функция f6. Функция считывает значение из i-6 и с помощью indexOf и ищет данный элемент в СТРОКЕ a6. Выводит в out-6 результат поиска.
// Изучите поведение введя по очереди 3, '3', 'a', 5, ytt


let a6 = '987123abcdefyttb4';

const f6 = () => {
	const i6 = document.querySelector('.i-6').value;
	const out6 = document.querySelector('.out-6');
	out6.textContent = a6.indexOf(i6);
}


// TASK 07
// По нажатию b-7 выполняется функция f7. Функция принимает 2 параметра, первый массив, второй - искомое число. Функция должна эмулировать работу метода indexOf с помощью цикла. Что понимается под эмуляцией? Мы не используем метод indexOf, а циклом перебираем массив и с помощью if решаем задачу. Функция должна только либо выводить в out-7 число -1, если искомого числа нет в массиве, или индекс числа в массиве.


let a7 = [21, 22, 23, 24, 25, 26, 27];

const f7 = (arr, elem) => {
	let res = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === +elem) {
			res = i;
			break;
		} 
	}
	document.querySelector('.out-7').textContent = res;
}




// TASK 08 * - сложная
// По нажатию b-8 выполняется функция f8. Функция должна получить число из i-8 и с помощью цикла и indexOf найти все индексы данного числа в массиве a8. Индексы должны быть добавлены в res08. Результат (res08) выведите в out-8. Если число не встречается в массиве, то res08 должен быть пустым.



let a8 = [1, 2, 3, 1, 3, 2, 55, 23, 53, 24, 55, 3, 1, 5, 2, 3, 5, 4, 6, 7, 12, 53];


const f8 = () => {
	const res08 = [];
	const num = +document.querySelector('.i-8').value;
	for (let i = 0; i < a8.length; i++) {
		const a8num = a8.indexOf(num, i);
		if (a8num === -1) break;
		if (a8num > -1) {
			i = a8num;
			res08.push(i);
		}
	}
	document.querySelector('.out-8').textContent = res08;
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна получить число из i-9 и с помощью цикла и indexOf вывести в out-9 все индексы вложенных в a9 массивов содержащие указанное число. Вывод через пробел. Если совпадений нет - выводите пустую строку.
// пример если a9 = [ [1,2] , [2, 3], [3,4,5], [6, 7, 5] ]
// и ввели число 5 то в out-9 должен быть вывод 2 3 поскольку [3,4,5] находится в a9 под индексом 2,
// a [6, 7, 5] под индексом 3
// пример 2. Если a9 = [ [1,2] , [2, 3], [3,4,5], [6, 7, 5] ]
// и ввели 3 то в out-9 будет 1 2

let a9 = [
	[55, 22, 33],
	[3, 4, 22, 7],
	[66, 2, 12, 55],
	[142, 12, 7, 15],
	[45, 12, 67, 32]
];

const f9 = () => {
	const i9 = +document.querySelector('.i-9').value;
	const out9 = document.querySelector('.out-9');
	let res = '';
	a9.forEach(item => {
		for (let i = 0; i < item.length; i++) {
			if (item.indexOf(i9, i) > -1) {
				i = item.indexOf(i9, i);
				res += i + ' ';
			 }
		}
	})
	out9.textContent = res;
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Как вы заметили, indexOf ищет по строгому сравнению ( 4 task ). Давайте напишем функцию f10 которая принимает два параметра - массив и искомую строку или число. Функция должна ВОЗВРАТИТЬ -1 если никаких совпадений нет, либо индекс при нестрогом совпадении. Пример
// массив a10 = [1, 2, '3'] введи 3 получили индекс 2
// массив a10 = [1, 2, '3'] введи '3' получили индекс 2
// массив a10 = [1, 2, '3'] введи '2' получили индекс 1
// массив a10 = [1, 2, '3'] введи '9' получили -1
// массив a10 = [1, 2, '2', '3'] введи '2' получили 1
// массив a10 = [1, 2, '2', '3'] введи 2 получили 1

let a10 = [67, '55', 2, 5, '4', '8', 8, '66', '54', 11];

const f10 = (arr, elem) => {
	let out = '';
	for (let i = 0; i < arr.length - 1; i++) {
		if (elem == arr[i]) {
			return out = i;
		}
	}
	if (out === '') {
		return -1;
	}
}


document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', () => {
	// f4(a4, '2'); // изучите какой индекс вывело. Разберитесь почему
	f4(a4, '3'); // изучите какой индекс вывело. Разберитесь почему
});
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', () => {
	let num = +document.querySelector('.i-7').value;
	f7(a7, num);
});
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', () => {
	document.querySelector('.out-10').innerHTML = f10(a10, 8);
});