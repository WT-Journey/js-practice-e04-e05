/*
 * 1 Порахувати загальну суму покупок у кошику
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// 2 зробити змінну total до циклу
let total = 0;

// 1 перебрати масив
for (let i = 0; i < cart.length; i += 1) {
  console.log(cart[i]);
  // 3 кожен елемент додати до total
  total += cart[i];
}
/*
 * запис total += cart[i]; рівнозначний до запису: total = total + cart[i];
 */

// for (const value of cart) {
//   total += value;
// }

console.log('Загальна сума: ', total);

/*
* 2 Додати податок до кожної суми у кошику 
*/
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// console.log('Кошик без податка', cart);

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log('Кошик з урахуванням податка', cart);