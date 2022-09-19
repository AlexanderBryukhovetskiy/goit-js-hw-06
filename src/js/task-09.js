// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const body = document.querySelector('body');
const colorNumber = document.querySelector('span.color')
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {

  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  body.style.backgroundColor = randomColor;
  colorNumber.textContent = randomColor;
}
