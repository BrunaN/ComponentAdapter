let text = document.getElementById('text');
let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');

let content = document.getElementsByClassName('content');

let style = window.getComputedStyle(text, null);

let next = document.getElementById("next");
let countContent = 0;

next.addEventListener("click", function(){
    content[countContent].style.display = 'none';
    countContent++;
    content[countContent].style.display = 'flex';
});

increaseButton.addEventListener("click", function(){
    let fontSize = style.getPropertyValue('font-size');
    let x = parseInt(fontSize.replace("px",""));

    text.style.fontSize = x + 5 +'px'
});

decreaseButton.addEventListener("click", function(){
    let fontSize = style.getPropertyValue('font-size');
    let x = parseInt(fontSize.replace("px",""));

    text.style.fontSize = x - 5 +'px'
});