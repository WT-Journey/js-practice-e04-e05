/*
 * Парс числа з Number.parseInt() та Number.parseFloat()
 */

let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);

let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрьошки на прикладі console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

/*
 * - Приведення (перетворення) до числа з Number(value)
 * - Значення NaN (Not a Number) та метод Number.isNaN(value)
 */
let quantity = '30';
let value = 'Цей рядок неможливо призвести до числа';

// console.log(Number(quantity));
// console.log(Number(value));

/*
 * Обʼєкт Math
 * - Зведення до ступені
 * - Exponent operator
 */

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(base ** power);

/*
 * Напиши скрипт, який просить користувача ввести число та ступінь,
 * зводить число до цього ступеня і виводить результат у консоль
 */

//  1. Попросити ввести число та зберегти до змінну
// let base = prompt('Введіть число');
// base = Number(base);
// console.log(base);

//  2. Попросити ввести ступінь і зберегти змінну

// let power = prompt('Введіть ступінь');
// power = Number(power);
// console.log(power);

//  3. Звести введені дані до ступеня та вивести
// const result = base ** power;

// console.log(result);

/*
 * Генерим псевдовипадкові числа
 * - Math.random()
 * - Math.round()
 */
// Math.random() * (max - min) + min
// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;