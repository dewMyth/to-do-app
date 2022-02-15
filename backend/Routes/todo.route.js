const router = require("express").Router();

const User = require("../models/User.model");
const Todo = require("../models/Todo.model");

const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

//Create Todo
router.post("/create", verifyToken, async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    status: req.body.status,
    postedBy: req.user.id,
  });
  try {
    const todo = await newTodo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//View Todos
router.get("/", verifyToken, async (req, res) => {
  res.send("Working...");
});

module.exports = router;
