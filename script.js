const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');
const range = document.querySelector('#range');
const circle = document.querySelector('#circle')

btn.addEventListener('click', function (event) {
    square.style.backgroundColor = input.value;
} );


document.querySelector('#e_btn').style.display = "none";

range.addEventListener('input', function (params) {
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
})