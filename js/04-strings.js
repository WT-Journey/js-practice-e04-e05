/*
 * Довжина рядка, властивість length
 */
const message = 'В цьому рядку 26 символів.';
// console.log(message.length);

/*
 * Конкатенація рядків
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

// console.log(fullName);

/*
 * Напиши скрипт котрий виведе рядок у форматі:
 * «Гість X Y заселяється у Z номер Q»,
 * підставивши замість X Y Z Q значення змінних.
 */

const room = 716;
const type = 'VIP';

// const welcomeMsg =
//   'Гість ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' заселяється у ' +
//   type +
//   ' номер ' +
//   room;
// 
// const welcomeMsg = `Гість ${firstName} ${lastName} заселяється у ${type} номер ${room}`;

// console.log(welcomeMsg);

/*
 * Шаблонні рядки (template strings)
 * Повертаємося до складання рядка заселення до готелю
 */
console.log(`${5 + 5}`);

const quantity = 15;
const orderMsg = `Ви замовляєте ${quantity} холодильників.`;

// console.log(orderMsg);

/*
 * Нормалізація з методом toLowerCase()
 */
// const brand = 'Samsung';
// const inDb = 'samsung';
// const normalizeBrand = brand.toLocaleLowerCase();
// console.log(normalizeBrand);

// let brand = 'SamSUnG';
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = prompt('Введіть бренд');
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'SamSUnG';
// console.log(brand.slice(1).toLowerCase());

// console.log(brand[4]);

let brand = 'SamSUnG';
brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

/*
 * Пошук у рядку з методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна компанія #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.includes(blacklistedWord2));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));


// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));