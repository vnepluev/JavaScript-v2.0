const b4 = document.querySelector('.b-4');
const i4 = document.querySelector('.i-4');
const out4 = document.querySelector('.out-4');

b4.onclick = () => {
    if (i4.checked) {
        out4.innerHTML = 'Выбран'
    } else {
        out4.innerHTML = 'Не выбран'
    }
}

const b5 = document.querySelector('.b-5');
const i5 = document.querySelector('.i-5');
const out5 = document.querySelector('.out-5');

b5.onclick = () => {
    if (i5.checked) {
        out5.innerHTML = i5.value;
    } else {
        out5.innerHTML = i5.checked;
    }
        
}

const i6 = document.querySelector('.i-6');
const out6 = document.querySelector('.out-6');

document.querySelector('.b-6').onclick = () => {
    out6.innerHTML = i6.value;
}

const i7 = document.querySelector('.i-7');
const out71 = document.querySelector('.out-71');
const out72 = document.querySelector('.out-72');

document.querySelector('.b-7').onclick = () => {
    out71.innerHTML = i7.value;
    out72.innerHTML = 0;
    if (i7.value.length >= 6) {
        out72.innerHTML = 1
    }
}

const b8 = document.querySelector('.b-8');
const out8 = document.querySelector('.out-8');

b8.onclick = () => {
    out8.innerHTML = '<input type="text" class="i-81"> <button class="b-81">b-81</button>';
    document.querySelector('.b-81').onclick = f81;
}

function f81() {
    out8.innerHTML = document.querySelector('.i-81').value;
}

