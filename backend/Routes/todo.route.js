const router = require("express").Router();

const User = require("../models/User.model");
const Todo = require("../models/Todo.model");

const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

//View Todos
router.get("/", verifyToken, async (req, res) => {
  res.send("Working...");
});

module.exports = router;
