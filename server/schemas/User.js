const mongoose = require("mongoose");
const { Schema } = mongoose;

// word is stored in 'users' collection
// So we don't need 'word' schema. Find user and then find word

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  word: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
