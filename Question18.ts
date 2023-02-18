// Define the array of places to visit
let places_i_am_visiting: string[] = ["Tokyo", "Bali", "New York", "Paris", "Sydney"];

// Print the array in its original order
console.log("Original Order: " + places_i_am_visiting.join(", "));

// Print the array in alphabetical order
console.log("Alphabetical Order: " + places_i_am_visiting.slice().sort().join(", "));

// Print the array to show it's still in its original order
console.log("Original Order: " + places_i_am_visiting.join(", "));

// Print the array in reverse alphabetical order
console.log("Reverse Alphabetical Order: " + places_i_am_visiting.slice().sort().reverse().join(", "));

// Print the array to show it's still in its original order
console.log("Original Order: " + places_i_am_visiting.join(", "));

// Reverse the order of the array
places_i_am_visiting.reverse();
console.log("Reversed Order: " + places_i_am_visiting.join(", "));

// Reverse the order of the array again to get back to original order
places_i_am_visiting.reverse();
console.log("Original Order: " + places_i_am_visiting.join(", "));

// Sort the array in alphabetical order
places_i_am_visiting.sort();
console.log("Alphabetical Order: " + places_i_am_visiting.join(", "));

// Sort the array in reverse alphabetical order
places_i_am_visiting.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order: " + places_i_am_visiting.join(", "));
