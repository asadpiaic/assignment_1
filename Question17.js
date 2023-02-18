"use strict";
let fewer_guest = ['Umar', 'Moeez', 'Hassam', 'Umair', 'Abdullah', 'Awais', 'Hannan'];
console.log(`You can invite only two people for dinner.`);
while (fewer_guest.length > 2) {
    const removedGuest = fewer_guest.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
for (const guest of fewer_guest) {
    console.log(`Dear ${guest}, you're still invited to dinner!`);
}
fewer_guest.splice(0, fewer_guest.length);
console.log(`Guest list: ${fewer_guest}`);
