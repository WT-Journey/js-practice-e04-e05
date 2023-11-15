/*
 * Напиши скрипт пошуку логіна
 * - Якщо немає логіну, вивести повідомлення 'Користувача [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувача [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() з тернарним оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

/*
 * 1 Рішення з використанням for
 */

// let message = `Користувача ${loginToFind} не знайдено.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, рівні!!!');
//     message = `Користувача ${loginToFind} знайдено.`;
//     break;
//   }
// }

// console.log(message);

/*
 * 2 Рішення з використанням for...of
 * 3 Логіка break
 */

// let message = `Користувача ${loginToFind} не знайдено.`;
// for (const login of logins) {
//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, рівні!!!');
//     message = `Користувача ${loginToFind} знайдено.`;
//     break;
//   }
// }

// console.log(message);

/*
 * 4 Метод includes() з тернарним оператором
 */

// const message = logins.includes(loginToFind)
//   ? `Користувача ${loginToFind} знайдено.`
//   : `Користувача ${loginToFind} не знайдено.`;

// console.log(message);