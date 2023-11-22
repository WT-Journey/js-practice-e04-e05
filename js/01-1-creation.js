/*
* Об'єкти (робимо плейліст музики: ім'я, рейтинг, треки, кількість треків)
 * - Літерал об'єкта
 * - Властивості, ключі (ім'я) та значення
 * - Як відрізнити об'єкт від області видимості
 */

const playlist = {
    name: 'Мій супер плейліст',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
}

console.log(playlist);
console.log(playlist.name);


/*
 * Доступ до властивості
 * - obj.key
 * - obj['key']
 * - Відсутні властивості
 */

// const playlist = {
//     name: 'Мій супер плейліст',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// }

// console.log(playlist.tracks);
// console.log(playlist['tracks']);

// const propertyName = 'tracks';
// console.log(playlist[propertyName]);

// playlist.new = 5;

// playlist.rating = 30;

/*
 * Короткий запис властивостей
 */
const username = 'Fox';
const email = 'fox@mail.com';

// const signupData = {
//     username: username,
//     email: email,
// }

const signupData = {
    username,
    email,
}

console.log(signupData);

/*
 * Властивості, що обчислюються
 */

//  <input name="color" value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

/*
 * Тип за посиланням {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Масиви та функції це об'єкти
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);