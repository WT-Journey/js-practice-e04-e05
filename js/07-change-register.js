/*
 * Напиши скрипт, який замінює регістр кожного символу в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході має бути рядок «jAVAsCRIPT».
 */

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  console.log(letter);
/*
 * 1 Рішення з використанням if...else
 */
  
  // if (letter === letter.toLowerCase()) {
  //   console.log('Ця буква у нижньому регістрі!!! - ', letter);
  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Ця літера у верхньому регістрі!!! - ', letter);
  //   invertedString += letter.toLowerCase();
  // }
  
/*
 * 2 Рішення з використанням тернарного оператора
 */
  // const isEqual = letter === letter.toLowerCase();
  // invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log('Інвертований рядок: ', invertedString);