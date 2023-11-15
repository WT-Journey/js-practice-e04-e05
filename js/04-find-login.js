/*
* Напиши функцію findLogin(allLogins, login) для пошуку логіну
 * - Якщо немає логіну, вивести повідомлення 'Користувача [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувача [логін] знайдено.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Користувача ${loginToFind} знайдено.`;
//     }
//   }

//   return `Користувача ${loginToFind} не знайдено.`;
// };

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Користувача ${loginToFind} знайдено.`
    : `Користувача ${loginToFind} не знайдено.`;
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));