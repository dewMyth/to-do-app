const router = require("express").Router();
const User = require("../models/User.model");

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

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
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login User
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json({ message: "User not found" });

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    );
    console.log(hashedPassword);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    console.log(originalPassword);
    originalPassword !== req.body.password &&
      res.status(401).json({ message: "Wrong password" });

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECURITY_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
