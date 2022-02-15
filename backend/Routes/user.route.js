const router = require("express").Router();
const User = require("../models/User.model");

const CryptoJS = require("crypto-js");

//Register User
router.post("/register", async (req, res) => {
  console.log(req.body);
  const newUser = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(),
  });

  console.log(newUser);

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
