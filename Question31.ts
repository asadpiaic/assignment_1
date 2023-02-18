let user_names: string[] = ['admin', 'me', 'you', 'nokia', 'test'];

if (user_names.length > 0) {
  for (let username of user_names) {
    if (username === 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log('We need to find some users!');
}