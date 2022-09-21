// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const divsAmont = document.querySelector("input");
const addDivsBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divToInsertBoxes = document.querySelector("div#boxes");

addDivsBtn.addEventListener('click', createBoxes);

let size = 30;

function createBoxes(event) {
  const amount = Number(divsAmont.value);
  const divElements = [];
  
  for (let i = 0; i < amount; i += 1) {    
      const divElement = document.createElement('div');
      divElement.style.backgroundColor = getRandomHexColor();
      divElement.style.height = `${size}px`;
      divElement.style.width = `${size}px`;

      divElements.push(divElement);

      size +=10;
  }
 
   divToInsertBoxes.append(...divElements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divToInsertBoxes.innerHTML = "";
}