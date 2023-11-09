/*
 * Цикл for
 */

// for (ініціалізація; умова; пост - вираз){
//   // тіло цикла
// }

// for (let i = 0; i < 10; i +=1){
//       console.log(i);
// }
// console.log('За межами циклу');


// for (let i = 10; i >= 0; i -=2){
//     console.log(i);
// }
// console.log('За межами циклу');


/*
* i += 1; рівнозначно до запису i = i + 1; 
*/

/*
 * Pre-increment та Post-increment
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;

// const b = a++;
// const b = ++a;

// console.log('a:', a);
// console.log('b:',b);

/*
* Напиши скрипт, який підраховує загальну суму зарплат працівників.
 * Кількість працівників зберігається в змінній employees.
 * Зарплата кожного працівника це випадкове число від 500 до 5000
 * Записати суму в змінну totalSalary і вивести до консолі
 */

// 1 створити змінні
const employees = 3;
let totalSalary = 0;
const minSalary = 500;
const maxSalary = 5000;

// 2 перебрати працівників у циклі
for (let i = 0; i <= employees; i += 1){
    // 3 згенерувати випадкову зп
    const salary = Math.round(Math.random()*(maxSalary-minSalary)+minSalary)
    console.log(`ЗП працівника номер ${i} - ${salary}`);

    // 4 додати до тоталу
    totalSalary += salary;
   
}

// 5 залогувати результат
 console.log('Загальна зарплата:', totalSalary);