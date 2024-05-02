const express = require("express");
const router = express.Router();

const User = require("../schemas/User");
const authenticate = require("./auth");

// There is no GET all words logic, because each user has only one word
// There is no DELETE in this simple etude

// Get one word
router.get("/", async (req, res) => {
  const username = authenticate(req, res);
  if (!username) {
    return;
  }

  try {
    const user = await User.findOne({ username }); 
    // It should be 'username: username', but since it's repeat we can make short

    if (user) {
      const storedWord = user.word;
      res.json({ storedWord });
    } else {
      res.status(400).json({ error: "user not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update one word
router.patch("/", async (req, res) => {
  const username = authenticate(req, res);

  if (!username) {
    return;
  }

  const { newWord } = req.body;

  try {
    const updatedResult = await User.updateOne(
      { username: username },
      { $set: { word: newWord } }
    );

    // Unlike GET, await User.method() returns a result object, not a user object
    // One of its properties is "modifiedCount". If it's 1, the update is successful
    
    if (updatedResult.modifiedCount > 0) {
      res.json({ newWord });
    } else {
      res.status(400).json({ error: "user not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;