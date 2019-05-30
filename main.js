let text = document.getElementById('text');
let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');

let style = window.getComputedStyle(text, null);

let next = document.getElementById("next");

next.addEventListener("click", function(){
    
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