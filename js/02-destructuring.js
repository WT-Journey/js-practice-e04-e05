/*
* Деструктуризація об'єкта
 * - Значення за замовчуванням
 * - Ім'я змінної відмінне від імені властивості
 */

const playlist = {
    name: 'Мій супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
  };
  
  // const {
  //   rating,
  //   tracks,
  //   name,
  //   trackCount: numberOfTracks = 0,
  //   author = 'user',
  // } = playlist;
  
  // console.log(numberOfTracks);
  
  /*
   * Глибока деструктуризація
   */
  
  // const profile = {
  //   name: 'Jacques Gluke',
  //   tag: 'jgluke',
  //   location: 'Ocho Rios, Jamaica',
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  //   stats: {
  //     followers: 5603,
  //     views: 4827,
  //     likes: 1308,
  //   },
  // };
  
  // const {
  //   avatar,
  //   name,
  //   tag,
  //   location,
  //   stats: { followers, views, likes },
  // } = profile;
  
  // console.log(name, tag, location, avatar, followers, views, likes);
  
  /*
   * Деструктуризація масивів
   */
  
  const rgb = [255, 100, 80];
  
  const [red, green, blue] = rgb;
  
//   console.log(red, green, blue);
  
  const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
  };
  
  const entries = Object.entries(authors);
  
//   console.log(entries);
  
  // for (const [name, rating] of entries) {
  //   // ур2
  //   // const [name, rating] = entry;
  
  //   // ур1
  //   // const name = entry[0];
  //   // const rating = entry[1];
  
  //   console.log(name, rating);
  // }
  
  /*
   * Операція rest (збір)
   */
  
//   const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://i.pravatar.cc/400?img=6',
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
//   const { name, tag, location, ...restProps } = profile;
  
//   console.log(name, tag, location);
//   console.log(restProps);
//   console.log(profile);
  
  /*
   * Паттерн «Об'єкт налаштувань»
   * - деструктуризація параметра-об'єкта у підписі функції
   * - rest при деструктуризації у підписі
   */
  
//   const showProfileInfo = function (userProfile) {
//     const { name, tag, location, ...restProps } = userProfile;
  
//     // console.log(name, tag, location, avatar, followers, views, likes);
//     console.log(restProps);
//   };
  
//   const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://i.pravatar.cc/400?img=6',
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
//   showProfileInfo(profile);