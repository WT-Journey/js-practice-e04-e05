/*
* Напиши функцію logItems(items) для перебору та логування масиву
 */

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mark', 'Ivan', 'Polina', 'Albina']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавіатура', 'навушники', 'годинник']);