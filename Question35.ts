const animals: string[] = ['dog', 'cat', 'rabbit'];
const characteristics: string = 'would make a great pet';

for (let animal of animals) {
  console.log(`A ${animal} ${characteristics}.`);
}

console.log(`Any of these animals ${characteristics}!`);
