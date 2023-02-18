let current_users: string[] = ["Foji", "Awais", "Hamza", "john", "me"];
let new_users: string[] = ["Hassam", "Tum", "ME", "AUR", "ap"];


for (let newUser of new_users) {
  const isUsernameTaken = current_users.some(
    (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
  );

  if (isUsernameTaken) {
    console.log(`Sorry, the username ${newUser} is already taken. Please choose a different username.`);
  } else {
    console.log(`Great! The username ${newUser} is available.`);
  }
}