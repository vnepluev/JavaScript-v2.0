document.querySelector('#b-2').onclick = t2;

function t2() {
    let out2 = '';
    for (let i = 2; i <= 122; i+=2) {
        out2 += i + ' ';
    }
    document.querySelector('#out-2').innerHTML = out2;
}

// Задача 3
document.querySelector('#b-3').onclick = t3;
function t3() {
    out3 = '';
    for (let i = 25; i > 6; i--) {
        out3 += i + ' ';
    }
    document.querySelector('#out-3').innerHTML = out3;
}

// Задача 4
document.querySelector('#b-4').onclick = t4;
function t4() {
    let out4 = '';
    for (let i = 77; i > 34; i -= 3) {
        out4 += i + '_';
    }
    document.querySelector('#out-4').innerHTML = out4;
}

// Задача 5
document.querySelector('#b-5').onclick = () => {
    out5 = '';
    for (let i = 1; i < 17; i++) {
        if (i % 2) {
            out5 += i+'_*';
        } else {
            out5 += i+ '_**';
        }
    }
    document.querySelector('#out-5').innerHTML = out5;
}

// Задача 6
document.querySelector('#b-6').onclick = function t6() {
    let i6 = +document.querySelector('#i-6').value;
    let out6 = '';
    for (let i = 0; i < i6; i++) {
         out6 += '******<br>';
    }
    document.querySelector('#out-6').innerHTML = out6;
}

// Задача 12
document.querySelector('#b-12').onclick = function t12() {
    let elem = document.querySelectorAll('.div-12');
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.background = 'orange';
    }
}

// Задача 14
document.querySelector('#b-14').onclick=function t14() {
    let i14 = document.querySelectorAll('.i-14');
    for (let i = 0; i < i14.length; i++) {
        if (i14[i].checked) {
            document.querySelector('.out-14').innerHTML = i14[i].id;
            break;
        }
    }
}

// Задача 15
document.querySelector('#b-15').onclick = function t15() {
    let b = 10;
    let out15 = '';
    for (let i = 0; i < 11; i++) {
        out15 += b + ' ' + i + ' ';
        b--;
    }
    document.querySelector('.out-15').innerHTML = out15;
}