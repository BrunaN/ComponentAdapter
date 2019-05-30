let text = document.getElementById('text');
let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');
let increaseTextLineButton = document.getElementById('increase-text-line');
let decreaseTextLineButton = document.getElementById('decrease-text-line');

let content = document.getElementsByClassName('content');
let finish = document.getElementsByClassName('finish')[0];

let paragraph = document.getElementsByTagName('p');

let next = document.getElementById("next");
let countContent = 0;

let style = window.getComputedStyle(text, null);
let fontSize = style.getPropertyValue('font-size');

let styleParagraph = window.getComputedStyle(paragraph[1], null);
let lineHeight = styleParagraph.getPropertyValue('line-height');

increaseButton.addEventListener("click", function(){
    let x = parseInt(fontSize.replace("px",""));

    text.style.fontSize = x + 5 +'px';
    fontSize = style.getPropertyValue('font-size');
});

decreaseButton.addEventListener("click", function(){
    let x = parseInt(fontSize.replace("px",""));

    text.style.fontSize = x - 5 +'px';
    fontSize = style.getPropertyValue('font-size');
});

increaseTextLineButton.addEventListener("click", function(){
    lineHeight = styleParagraph.getPropertyValue('line-height');
    let x = parseInt(lineHeight.replace("px",""));
    
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].style.lineHeight = x + 2 + 'px';
    } 

    lineHeight = styleParagraph.getPropertyValue('line-height');
});

decreaseTextLineButton.addEventListener("click", function(){
    lineHeight = styleParagraph.getPropertyValue('line-height');
    let x = parseInt(lineHeight.replace("px",""));
    
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].style.lineHeight = x - 2 + 'px';
    } 

    lineHeight = styleParagraph.getPropertyValue('line-height');
});

let buttonStyle;
let buttonGroup;
let linkGroup;
let formGroup;

function buttonSelected(className){
    buttonStyle = className;
}

function buttonGroupSelected(className){
    buttonGroup = className;
}

function linkGroupSelected(className){
    linkGroup = className;
}

function formGroupSelected(className){
    formGroup = className;
}

let components = {
    'fontSize': '',
    'lineHeight': '',
    'button': '',
    'buttonGroupSpace': '',
    'linkGroupSpace': '',
    'formGroup': '',
};


next.addEventListener("click", function(){
    
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].style.fontSize = fontSize;
    } 

    content[countContent].style.display = 'none';
    countContent++;

    if(countContent >= 6){
        finish.style.display = 'flex';
    }

    content[countContent].style.display = 'flex';

    components.fontSize = fontSize;
    localStorage.setItem('fontSize', components.fontSize);
    components.lineHeight = lineHeight;
    localStorage.setItem('lineHeight', components.lineHeight);
    components.button = buttonStyle;
    localStorage.setItem('buttonStyle', components.button);
    components.buttonGroupSpace = buttonGroup;
    localStorage.setItem('buttonGroup', components.buttonGroupSpace);
    components.linkGroupSpace = linkGroup;
    localStorage.setItem('linkGroup', components.linkGroupSpace);
    components.formGroup = formGroup;
    localStorage.setItem('formGroup', components.formGroup);
    console.log(components);

});