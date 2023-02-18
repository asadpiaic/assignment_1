"use strict";
const animals = ['dog', 'cat', 'rabbit'];
const characteristics = 'would make a great pet';
for (let animal of animals) {
    console.log(`A ${animal} ${characteristics}.`);
}
console.log(`Any of these animals ${characteristics}!`);
