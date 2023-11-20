/*
* Функції
 * - Функціональні вирази
 * - Аргументи та параметри
 * - Повернення значення
 */

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Виконується функція add');

//   const result = x + y;
//   console.log('x + y = ', result);

//   return result;
/*
* або підставити сам вираз: return x + y;
 */
// }

// add(2,3);
// add(7,3);
// add(12,3);


// const r1 = add(20, 30);
// console.log('r1 =', r1);

// const r2 =add(5,7);
// console.log('r2 = ', r2)

// const r3 = add(12,30);
// console.log('r3 = ', r3);

/*
* return
*/

// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);

//   return 15;
// }

// console.log('Результат функції:',fn());


// const fn = function (value) {
//   if (value < 50) {
//     return 'Менше ніж 50';
//   } 
//     return 'Більше ніж 50';

// };

// console.log('Результат функції: ', fn(10));
// console.log('Результат функції: ', fn(1000));


/*
 * - Стек викликів
 * - Stack trace та пошук помилок
 */

// const fnA = function () {
//   console.log('Виконується функція A');
// };

// const fnB = function () {
//   console.log('Виконується функція B');
//   console.log(value);

// };

// const fnC = function () {
//   console.log('Виконується функція C');
// };

// console.log('Лог перед викликом функції A');

// fnA();

// console.log('Лог після виклика функції A');

// console.log('Лог перед викликом функції B');
// fnB();
// console.log('Лог після виклика функції B');

// console.log('Лог перед викликом функції C');
// fnC();
// console.log('Лог після виклика функції C');


/*
* Коли функція викликається всередені іншої функції
 */

// const fnA = function () {
//   console.log('Виконується функція A');
//   fnB();
// };

// const fnB = function () {
//   console.log('Виконується функція B');
//   fnC();
// };

// const fnC = function () {
//   console.log('Виконується функція C');
//   console.log(value);
// };

// fnA(); 

