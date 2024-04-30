const mongoose = require("mongoose");
const { Schema } = mongoose;

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
