let fontSize = localStorage.getItem('fontSize');
let lineHeight = localStorage.getItem('lineHeight');
let buttonStyle = localStorage.getItem('buttonStyle');
let buttonGroup = localStorage.getItem('buttonGroup');
let linkGroup = localStorage.getItem('linkGroup');
let formGroup = localStorage.getItem('formGroup');

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
    buttons[i].style.margin = buttonGroup;
}

for(let i = 0; i < forms.length; i++){
    forms[i].classList.add(formGroup);
}

for(let i = 0; i < links.length; i++){
    links[i].style.margin = linkGroup;
}