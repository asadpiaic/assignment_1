function show_my_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
    great_magicians.push(`The Great ${magician}`);
  }
  return great_magicians;
}

let my_magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette"];
let new_great_magicians: string[] = make_great(magicians.slice()); // make a copy of the original array
show_my_magicians(my_magicians);
console.log("----------------------");
show_magicians(new_great_magicians);
