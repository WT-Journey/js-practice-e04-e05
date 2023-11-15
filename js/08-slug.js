/*
* Робимо slug до URL із назви статті (наприклад на dev.to)
 * Заголовок статті складається тільки з літер та пробілів
 *
 * - Нормалізуємо рядок
 * - Розбиваємо за словами
 * - Зшиваємо в рядок з роздільниками
 */
// Повинно вийти top-10-benefits-of-js
const title = 'Top 10 benefits of JS';

/*
 * 1 Нормалізуємо рядок
 */
  
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);
/*
 * 2 Розбиваємо за словами
 */
  
const words = normalizedTitle.split(' ');
console.log(words);
/*
 * 3 Зшиваємо в рядок з роздільниками
 */
  
const slug = words.join('-');
console.log(slug);

/*
 * Варіант ріщшення в один рядок
 */
const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);