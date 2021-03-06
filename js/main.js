let text = document.getElementById('text');
let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');
let increaseTextLineButton = document.getElementById('increase-text-line');
let decreaseTextLineButton = document.getElementById('decrease-text-line');

let content = document.getElementsByClassName('content');
let containerText = document.getElementsByClassName('container-text')[0];
let finish = document.getElementsByClassName('finish')[0];

let paragraph = document.getElementsByTagName('p');

let next = document.getElementById("next");
let loadPage = document.getElementById("load-page");

let countContent = 0;

let style = window.getComputedStyle(text, null);
let fontSize = style.getPropertyValue('font-size');

let styleParagraph = window.getComputedStyle(paragraph[1], null);
let lineHeight = styleParagraph.getPropertyValue('line-height');

let components = {
    'fontSize': '',
    'lineHeight': '',
    'button': '',
    'buttonGroupSpace': '',
    'linkGroupSpace': '',
    'formGroup': '',
};

let texts = [
    'Clique nos botões para tornar o espaço entre as linhas do texto mais adequado a você:',
    'Selecione o tamanho do botão mais adequado a você:',
    'Selecione a opção em que o espaço em branco entre os botões é mais adequado a você:',
    'Selecione a opção em que o espaço em branco entre os links é mais adequado a você:',
    'Selecione a opção em que o espaço em branco entre os elementos é mais adequado a você:'
];

let count = 0;

increaseButton.addEventListener("click", function () {
    let x = parseInt(fontSize.replace("px", ""));

    text.style.fontSize = x + 2 + 'px';
    fontSize = style.getPropertyValue('font-size');
    components.fontSize = fontSize;
});

decreaseButton.addEventListener("click", function () {
    let x = parseInt(fontSize.replace("px", ""));

    text.style.fontSize = x - 2 + 'px';
    fontSize = style.getPropertyValue('font-size');
    components.fontSize = fontSize;
});

increaseTextLineButton.addEventListener("click", function () {
    lineHeight = styleParagraph.getPropertyValue('line-height');
    let x = parseInt(lineHeight.replace("px", ""));

    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.lineHeight = x + 2 + 'px';
    }

    lineHeight = styleParagraph.getPropertyValue('line-height');
    components.lineHeight = lineHeight;
});

decreaseTextLineButton.addEventListener("click", function () {
    lineHeight = styleParagraph.getPropertyValue('line-height');
    let x = parseInt(lineHeight.replace("px", ""));

    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.lineHeight = x - 2 + 'px';
    }

    lineHeight = styleParagraph.getPropertyValue('line-height');
    components.lineHeight = lineHeight;
});

let buttonStyle;
let buttonGroup;
let marginButtonGroup
let linkGroup;
let marginLinkGroup;
let formGroup;

let countSelected = 0;

function buttonSelected(className) {
    buttonStyle = className;
    components.button = buttonStyle;
}

function buttonGroupSelected(className, margin) {
    if (buttonGroup != undefined) {
        document.getElementsByClassName(buttonGroup)[0].classList.remove('selected');
    }

    document.getElementsByClassName(className)[0].classList.add('selected');

    buttonGroup = className;
    marginButtonGroup = margin;
    components.buttonGroupSpace = margin;
}

function linkGroupSelected(className, margin) {
    if (linkGroup != undefined) {
        document.getElementsByClassName(linkGroup)[0].classList.remove('selected');
    }

    document.getElementsByClassName(className)[0].classList.add('selected');

    linkGroup = className;
    marginLinkGroup = margin
    components.linkGroupSpace = margin;
}

function formGroupSelected(className) {
    if (formGroup != undefined) {
        document.getElementById(formGroup).classList.remove('selected');
    }

    document.getElementById(className).classList.add('selected');

    formGroup = className;
    components.formGroup = formGroup;
    localStorage.setItem('formGroup', components.formGroup);
}

content[0].style.display = 'flex';

next.addEventListener("click", function () {

    containerText.innerHTML = texts[count];
    count++;

    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.fontSize = fontSize;
    }

    content[countContent].style.display = 'none';
    countContent++;

    if (countContent >= 6) {
        finish.style.display = 'flex';
        next.style.display = 'none';
        containerText.style.display = 'none';
        loadPage.style.display = 'flex';
    }

    content[countContent].style.display = 'flex';

    console.log(components);

    localStorage.setItem('fontSize', components.fontSize);
    localStorage.setItem('lineHeight', components.lineHeight);
    localStorage.setItem('buttonStyle', components.button);
    localStorage.setItem('buttonGroup', components.buttonGroupSpace);
    localStorage.setItem('linkGroup', components.linkGroupSpace);
    localStorage.setItem('formGroup', components.formGroup);

});