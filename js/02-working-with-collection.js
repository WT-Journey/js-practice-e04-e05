/*
 * Робота з колекцією (масивом об'єктів)
 */

const friends = [
  { name: 'Mark', online: false },
  { name: 'Ivan', online: true },
  { name: 'Polina', online: true },
  { name: 'Albina', online: false },
];

// for (const friend of friends){
//   console.log(friend.name);
//   friend.newprop =111;
// }

// console.table(friends);

/*
 * Шукаємо друга за ім'ям
 */

// const findFriendByName = function (allFriends, friendName) {
// for (const friend of allFriends){
//   console.log(friend);

//   if (friend.name === friendName) {
//     return 'ЗНАЙШЛИ!';
//   }
// }
// return ' НЕ ЗНАЙШЛИ :(';
//  }

// console.log(findFriendByName(friends, 'Polina'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Отримуємо імена всіх друзів
 */

// const getAllNames = function (allFriends) {
//   const names = [];
// for (const friend of allFriends){
//   console.log(friend.name);
//   names.push(friend.name);
// }
// return names;
// }

// console.log(getAllNames(friends));

/*
 * Отримуємо імена тільки тих друзів, які онлайн
 */

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends){
//     console.log(friend);
//     console.log(friend.online);

//     if(friend.online) {
//       onlineFriends.push(friend)
//     }
//   }
//   return onlineFriends 
// }

// console.log(getOnlineFriends(friends));