function makeSandwich(...items: string[]) {
  console.log(`Sandwich with ${items.join(", ")} coming up!`);
}

// calling the function with different number of arguments
makeSandwich("lettuce", "tomato", "cheese");
makeSandwich("bacon", "egg", "mayo");
makeSandwich("turkey");
