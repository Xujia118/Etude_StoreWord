const User = require("../schemas/User");

const users = {};

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

async function userExists(username) {
  try {
    const existingUser = await User.find({ username: username });

    // mongoDB will return an array. If the user does not exist, the array will be empty
    return existingUser.length > 0 ? existingUser[0] : null;
    
  } catch (err) {
    console.log(err);
  }
}

// function getWord(username) {
//   const existingUser = userExists(username);
//   return existingUser.word;
// }

// This is the old way
function getWord(username) {
  return users[username];
}

function validateWord({ username, newWord }) {
  let message = "";

  if (!newWord) {
    message = "word is null";
  }

  if (newWord.length > 20) {
    message = "word exceeds limit";
  }

  if (!message) {
    users[username] = newWord;
  }

  return message;
}

module.exports = {
  isValid,
  userExists,
  getWord,
  validateWord,
};
