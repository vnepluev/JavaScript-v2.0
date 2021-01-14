let out1 = document.querySelector('.out-1');

document.querySelector('#b-1').onclick = function t1() {
    out1.style.background = 'red';
    out1.style.height = '40px';
    out1.style.width = '240px';
}

document.querySelector('.b-4').onclick = function f4() {
    document.querySelector('.out-4').classList.toggle('bg-4');
}

document.querySelector('.b-3').onclick = function f3() {
    document.querySelector('.out-3').classList.remove('bg-4');
}

document.querySelector('.b-31').onclick = function f31() {
    document.querySelector('.out-3').classList.add('bg-4');
}

document.querySelector('.b-5').onclick = function f5() {
    document.querySelector('.out-5').textContent = document.querySelector('.out-4').classList.contains('bg-4');
}

document.querySelector('.b-8').onclick = function f8() {
    let out8 = document.querySelectorAll('.out-8');
    for (let i = 0; i < out8.length; i++) {
        out8[i].classList.toggle('bg-4');
    }
}

let out9 = document.querySelectorAll('.out-9');
for (let i = 0; i < out9.length; i++) {
    out9[i].onclick = function f9() {
        this.classList.add('bg-4');
    }
}

document.querySelector('.b-12').onclick = function f12() {
    let out12 = document.querySelector('.out-12');
    let div12 = document.createElement('div');
    div12.textContent = '12';
    div12.classList.add('bg-4');
    out12.appendChild(div12);
}

document.querySelector('.b-13').onclick = function f13() {
    let out13 = document.querySelector('.out-13');
    let out131 = document.createElement('div');
    out131.textContent = 'Push me';
    out131.classList.add('bg-4');
    out13.appendChild(out131);
    out131.onclick = f13_1;
}
function f13_1() {
    console.log('Function 13');
}

document.querySelector('.b-14').onclick = f14;
function f14() {
    let out14 = document.createElement('div');
    out14.textContent = '14';
    out14.classList.add('bg-3');
    document.querySelector('.out-14').prepend(out14);
}

document.querySelector('.b-15').onclick = f15;
function f15() {
    let out15 = document.createElement('div');
    out15.textContent = '15';
    out15.classList.add('bg-4');
    document.querySelector('.out-15').before(out15);
}

document.querySelector('.b-16').onclick = f16;
function f16() {
    let out16 = document.createElement('div');
    out16.textContent = '16';
    out16.classList.add('bg-3');
    document.querySelector('.out-16').after(out16);
}

document.querySelector('.b-17').onclick = f17;
function f17() {
    let out17 = document.createElement('div');
    out17.textContent = '17';
    out17.classList.add('bg-4');
    document.querySelector('.out-17').replaceWith(out17);
}

document.querySelector('.b-18').onclick = f18;
function f18() {
    let out18 = document.querySelector('.p-18').getAttribute('data-p');
    document.querySelector('.out-18').textContent = out18;
}

document.querySelector('.b-19').onclick = f19;
function f19() {
    let p19 = document.querySelectorAll('.p-19');
    let p191 = '';
    for (let i = 0; i < p19.length; i++) {
        p191 += p19[i].getAttribute('data-b') + ' ';
    }
    document.querySelector('.out-19').textContent = p191;
}

