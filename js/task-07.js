// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const range = document.querySelector("input#font-size-control");
const rangableText = document.querySelector("span#text");

range.value = 16;

range.addEventListener("change", onInputChange);

function onInputChange (event) { 
    rangableText.style.fontSize = event.currentTarget.value + "px";    
}
