"use strict";
function make_new_shirt(size = "large", message = "I love TypeScript") {
    console.log(`A ${size} shirt will be printed with the message: "${message}"`);
}
make_new_shirt(); // Output: A large shirt will be printed with the message: "I love TypeScript"
make_new_shirt("medium"); // Output: A medium shirt will be printed with the message: "I love TypeScript"
make_new_shirt("small", "Hello, World!"); // Output: A small shirt will be printed with the message: "Hello, World!"
