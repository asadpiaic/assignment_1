let new_guest_list: string[] = ['Moeez','Hassam','Abdullah','Awais'];

console.log(`Hi everyone, I've found a bigger dinner table!`);

// Add one new guest to the beginning of the array
new_guest_list.unshift('Umar');
console.log(`${new_guest_list[0]} has been added to the guest list!`);

// Add one new guest to the middle of the array
const middleIndex = Math.ceil(new_guest_list.length / 2);
new_guest_list.splice(middleIndex, 0, 'Umair');
console.log(`${new_guest_list[middleIndex]} has been added to the guest list!`);

// Use push() to add one new guest to the end of the array
new_guest_list.push('Hannan');
console.log(`${new_guest_list[new_guest_list.length - 1]} has been added to the guest list!`);

// Print a new set of invitation messages for each person in the list
for (let guest of new_guest_list) {
  console.log(`Hi ${guest}, please come to my dinner party!`);
}