//task 1
let a1 = 8;
function t1() {
    document.querySelector('.out-1').innerHTML = a1;
}
document.querySelector('#b-1').onclick = t1;

//tusk 2
let a2 = 8;
function t2() {
    return a2;
}
document.querySelector('#b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
}

//tusk 3
function t3(a,b) {
    return a * b;
}
document.querySelector('#b3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
}
document.querySelector('#b3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6);
}

//tusk 6
function t6() {
    
}