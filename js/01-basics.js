/*
 * Знайомство з масивами
 * - оголошення
 * - індексація
 * - довжина
 * - індекс останнього елемента
 * - перевизначення
 *
 * 'Max', 'Kate', 'Poly', 'Alex'
 */

// const friends = ['Max','Kate','Poly', 'Alex'];
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// console.log(friends[2]);

// friends[1] = 'Robert';
// console.table(friends);


/*
 * Передача за посиланням та за значенням
 * - примітиви та складні типи
 * - referential equality
 */

// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

//  a = 20;

// console.log(a);
// console.log(b);

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);

/*
 * Перебір (ітерація) масиву
* - for - якщо потрібен індекс або потрібно змінити елемент масиву
 * - for...of - якщо індекс не потрібен і в масиві нічого міняти не потрібно
 */

// const friends = ['Max', 'Kate', 'Poly', 'Alex'];
// console.table(friends);

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += '-i';
//   console.log(friends[i]);
// }

// for (let friend of friends) {
//   console.log(friend);
// }
