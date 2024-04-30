const User = require("../schemas/User");

const users = {}

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

async function userExists(username) {
  const existingUser = await User.findOne({ username });
  return existingUser;
}
 
// function getWord(username) {
//   const existingUser = userExists(username);
//   return existingUser.word;
// }

// This is the old way
function getWord(username) {
  return users[username];
}

module.exports = {
    isValid,
    userExists,
    getWord,
}