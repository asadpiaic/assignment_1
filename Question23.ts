let a = 10;
let b = 5;
let c = 5;

console.log("Is a greater than b? I predict True.");
console.log(a > b);

console.log("Is b greater than a? I predict False.");
console.log(b > a);

console.log("Is b less than or equal to a? I predict True.");
console.log(b <= a);

console.log("Is c equal to b? I predict False.");
console.log(c == b);

console.log("Is c equal to '5'? I predict True.");
console.log(c === 5);

console.log("Is a greater than or equal to b and less than c? I predict False.");
console.log(a >= b && a < c);

console.log("Is a greater than or equal to b or less than c? I predict True.");
console.log(a >= b || a < c);

console.log("Is b not equal to c? I predict False.");
console.log(b != c);

console.log("Is b not equal to c and a is greater than 5? I predict True.");
console.log(b != c && a > 5);

console.log("Is b equal to c or a is less than 5? I predict True.");
console.log(b == c || a < 5);
