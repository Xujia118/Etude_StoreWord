const express = require("express");
const router = express.Router();

const User = require("../schemas/User");
const authenticate = require("./auth");

// word is stored in users collection
// So find the user and then find the word
// There is no get all words logic, because each user has only one word

// Get one word
router.get("/:id", async (req, res) => {
  const username = authenticate(req, res);
  if (!username) {
    return;
  }

  try {
    const user = await User.findById(req.params.id);

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
router.patch("/:id", async (req, res) => {
  const username = authenticate(req, res);

  if (!username) {
    return;
  }

  const { newWord } = req.body;

  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      { $set: { word: newWord } }
    );

    if (user) {
      res.json({ newWord });
    } else {
      res.status(400).json({ error: "user not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


///////////////////////// TEST ////////////////////////////////
const axios = require("axios");

// Function 


module.exports = router;