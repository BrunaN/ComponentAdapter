let fontSize = localStorage.getItem('fontSize');
let lineHeight = localStorage.getItem('lineHeight');
let buttonStyle = localStorage.getItem('buttonStyle');
let buttonGroup = localStorage.getItem('buttonGroup');
let linkGroup = localStorage.getItem('linkGroup');
let formGroup = localStorage.getItem('formGroup');

console.log(fontSize, lineHeight, buttonStyle, buttonGroup, linkGroup, formGroup);

let forms = document.getElementsByTagName('form');
let paragraphs = document.getElementsByTagName('p');
let buttons = document.getElementsByClassName('btn');
let links = document.getElementsByTagName('a');

let body = document.getElementsByTagName('body')[0];

body.style.fontSize = fontSize;

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.lineHeight = lineHeight;
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].classList.add(buttonStyle);
}