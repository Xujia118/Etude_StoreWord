const express = require("express");
const router = express.Router();

const users = require("../models/users");
const authenticate = require("./auth");

router.get("/", (req, res) => {
  const username = authenticate(req, res);
  if (!username) {
    return;
  }

  const storedWord = users.getWord(username);
  res.json({ storedWord });
});

router.patch("/", (req, res) => {
  const username = authenticate(req, res);
  if (!username) {
    return;
  }

  const { newWord } = req.body;
  res.status(200).json({ newWord })
});

module.exports = router;
