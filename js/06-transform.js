/*
 * Напиши скрипт, який поєднує всі елементи масиву в одне рядкове значення.
 * Елементів може бути довільна кількість.
 * Нехай елементи масиву в рядку будуть розділені комою.
 * - Спочатку через for
 * - Потім через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

/*
 * 1 Рішення з використанням for
 */

// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);
// console.log(string);

/*
 * 2 Рішення з використанням join()
 */
// const string = friends.join(',');
// console.log(friends);
// console.log(string);

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'