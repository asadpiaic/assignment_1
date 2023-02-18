"use strict";
let great_magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}
great_magicians = makeGreat(magicians);
showMagicians(magicians);
