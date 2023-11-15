/*
* Напиши функцію changeCase(string) яка замінює регістр
 * кожного символу у рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході має бути рядок «jAVAsCRIPT».
 */

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase('weBTECHnoloGies')); // WEbtechNOLOgIES
console.log(changeCase('coLLeGe')); // COllEgE
console.log(changeCase('JavaScript')); // jAVAsCRIPT