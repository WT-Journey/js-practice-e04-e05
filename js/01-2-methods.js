/*
 * Методи обʼєкта та this при зверненні до властивостей у методах
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Мій супер плейліст',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  changeName(newName) {
    console.log('this всередині changeName: ', this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('Нове імʼя');

playlist.addTrack('Новий трек 1');
console.log(playlist.getTrackCount());

playlist.addTrack('Новий трек 2');
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);