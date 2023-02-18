"use strict";
let guest_list = ['Hamza', 'Hassam', 'Abdullah', 'Awais'];
console.log(`The current guest list is: ${guest_list.join(", ")}`);
console.log(`${guest_list[0]} Cannot make it to dinner.`);
// Remove Hamza from the guest list
guest_list.splice(guest_list.indexOf("Hamza"), 1);
// Add Moeez to the guest list
guest_list.push("Moeez");
console.log(`The new guest list is: ${guest_list.join(", ")}`);
