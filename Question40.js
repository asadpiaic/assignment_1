"use strict";
function make_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('My', 'My Album');
const album2 = make_album('Black Pink', 'Hit The Wall', 26);
const album3 = make_album('Hmm', 'IV', 8);
console.log(album1);
console.log(album2);
console.log(album3);
