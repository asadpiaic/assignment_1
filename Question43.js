"use strict";
function show_my_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians;
}
let my_magicians = ["Harry Houdini", "David Blaine", "Penn Jillette"];
let new_great_magicians = make_great(magicians.slice()); // make a copy of the original array
show_my_magicians(my_magicians);
console.log("----------------------");
show_magicians(new_great_magicians);
