/*
 * Оператор розгалуження if
 */

// if (5 > 30) {
//   //  тіло
//   console.log('qweqwe');
// }

// console.log('далі');
/*
 * Оператор розгалуження if...else
 */

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

/*
 * Оператор розгалуження else...if
 */

const salary = 5000;

// if (salary <= 500) {
//   console.log('Рівеньь 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Рівень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Рівень 3');
// } else {
//   console.log('Рівень 4');
// }

// console.log('qweqwe');

/*
 * Тернарний оператор
 */
// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивний баланс';
// } else {
//   message = 'Негативний баланс';
// }
// console.log(message);

// const message = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';
// console.log(message);

/*
 * Блокова область бачимості змінних
 */

// if (true) {
//   const a = 5;
//   console.log(b);
// }

// if (true) {
//   const b = 10;

//   console.log(a);
// }