"use strict";
// Asad Abbas  18 Feb,2023
// Convert the person name to lower, upper and title case
let person_name = "Ameer Hamza";
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(person_name));
