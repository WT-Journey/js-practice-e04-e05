/*
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

/*
 * 1 Рішення з використанням for
 */

// // 1 змінна тотал
// let total = 0;
// // 2 перебрати масив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//   // 3 на кожній ітерації перевірити елемент на парність
// if (number % 2 === 0) {
//   console.log('Парне!!!!');

//   // 4 якщо парний, додаємо до тотал
//   total += number;
// }
// }
// console.log('Total: ', total);

/*
 * 2 Рішення з використанням for..of
 */
/*
 * 1й варіант
 */
// let total = 0;
// for (const number of numbers) {
//   // console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - парне!!!!`);
//     total += number;
//   }
// }
// console.log('Total: ', total);

/*
 * 2й варіант
 */
let total = 0;
for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log('Цю ітерацію слід пропустити', number);
    continue;
  }

  console.log(`${number} - парне!!!!`);
  total += number;
}

console.log('Total: ', total);