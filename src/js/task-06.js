//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
//У завданні 6 бордер повинен набувати зеленого кольору, коли кількість введених символів дорівнює значенням атрибуту (ЦЕ ЧИСЛО) data-length (а не більше або менше).


const input = document.querySelector("input#validation-input");
//console.log(input);
//console.log(input.getAttribute("data-length"));

input.addEventListener("blur", onInputBlur);

function onInputBlur(event){
    // console.log(event.currentTarget);//<input>  => ok
    // console.log(event.currentTarget.value.length);//к-во введенных символов
    // console.log(typeof event.currentTarget.value.length);//number
    // console.log(input.getAttribute("data-length"));//6
    // console.log(typeof input.getAttribute("data-length"));//string

    if (event.currentTarget.value.length == input.getAttribute("data-length")){
       event.currentTarget.classList.add("valid");
    } else {
       event.currentTarget.classList.add("invalid");
    }
}
