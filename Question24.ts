let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

let animal = 'cat';
console.log("Is animal == 'dog'? I predict False.");
console.log(animal == 'dog');

console.log("Is animal != 'cat'? I predict False.");
console.log(animal != 'cat');

let him = 'John';
console.log("Is name == 'john'? I predict False.");
console.log(him == 'john');

console.log("Is name.toLowerCase() == 'john'? I predict True.");
console.log(him.toLowerCase() == 'john');

let city = 'New York';
console.log("Is city == 'new york'? I predict False.");
console.log(city == 'new york');

console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');

let x = 10;
let y = 5;

console.log("Is x > y? I predict True.");
console.log(x > y);

console.log("Is x >= 10? I predict True.");
console.log(x >= 10);

console.log("Is y < 3? I predict False.");
console.log(y < 3);

let temperature = 80;
let time = 14;

console.log("Is temperature > 70 and time < 18? I predict True.");
console.log(temperature > 70 && time < 18);

console.log("Is temperature > 90 or time > 18? I predict True.");
console.log(temperature > 90 || time > 18);

let isSunny = true;
let isRaining = false;

console.log("Is it not sunny or is it raining? I predict True.");
console.log(!isSunny || isRaining);

console.log("Is it not sunny and is it not raining? I predict False.");
console.log(!isSunny && !isRaining);


let fruits = ['apple', 'banana', 'orange', 'kiwi'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log('banana' in fruits);

console.log("Is 'grape' in the fruits array? I predict False.");
console.log('grape' in fruits);

console.log("Is 'London' not in the cities array? I predict False.");
console.log('London' in fruits);