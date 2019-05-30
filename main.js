let text = document.getElementById('text');
let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');
let increaseTextLineButton = document.getElementById('increase-text-line');
let decreaseTextLineButton = document.getElementById('decrease-text-line');

let content = document.getElementsByClassName('content');

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
    let x = parseInt(lineHeight.replace("px",""));
    
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].style.lineHeight = x + 2 + 'px';
    } 

    lineHeight = styleParagraph.getPropertyValue('line-height');
});

decreaseTextLineButton.addEventListener("click", function(){
    let x = parseInt(lineHeight.replace("px",""));
    
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].style.lineHeight = x - 2 + 'px';
    } 

    lineHeight = styleParagraph.getPropertyValue('line-height');
});

let buttonStyle = "";

function buttonSelected(className){
    buttonStyle = className;
    console.log(buttonStyle);
}


let components = {
    'fontSize': fontSize,
    'lineHeight': lineHeight,
    'button': ''
};


next.addEventListener("click", function(){
    
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].style.fontSize = fontSize;
    } 

    content[countContent].style.display = 'none';
    countContent++;
    content[countContent].style.display = 'flex';

    console.log(components);
    components.button = buttonStyle;
});