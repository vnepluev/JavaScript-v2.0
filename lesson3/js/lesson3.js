const i1 = document.querySelector('.i-1');
const b1 = document.querySelector('.b-1');
const out1 = document.querySelector('.out-1');

b1.onclick = f1;

function f1() {
    if (i1.value == 4) {
        out1.innerHTML = true;
    } else {
        out1.innerHTML = false;
    }
}

// задание 5
const i5 = document.querySelector('.i-5');
const b5 = document.querySelector('.b-5');
const out5 = document.querySelector('.out-5');

b5.onclick = f5;

function f5() {
    let num = +i5.value;
    switch (true) {
        case num < 0:
            out5.innerHTML = 'm';
            break;
        case num == 0:
            out5.innerHTML = 0;
            break;
        default:
            out5.innerHTML = 1;
    }
}

// задание 6
const i6 = document.querySelector('.i-6');
const b6 = document.querySelector('.b-6');
const out6 = document.querySelector('.out-6');

b6.onclick = f6;

function f6() {
    let num = i6.value;
    if (num % 2) {
        out6.innerHTML = 'odd'
    } else {
        out6.innerHTML = 'even'
    }
}