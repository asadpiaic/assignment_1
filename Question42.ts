let great_magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

function showMagicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians: string[]): string[] {
  let greatMagicians: string[] = [];

  for (let magician of magicians) {
    greatMagicians.push(`The Great ${magician}`);
  }

  return greatMagicians;
}

great_magicians = makeGreat(magicians);
showMagicians(magicians);
