//Importing Necessary NPM Libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Creating the Express App
const app = express();

// for parsing application/json - important to take json input as object
app.use(express.json());

app.use(cors());

//Config File for Environment Variables
dotenv.config();

//Routes Import
const userRoute = require("./routes/user.route");
const todoRoute = require("./routes/todo.route");

//Route Paths
app.use("/api/user", userRoute);
app.use("/api/todo", todoRoute);

//Databasce Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(
  () => {
    console.log("Mongo Cloud Database Connected Successfully!");
  },
  (err) => {
    console.log("Error: ", err);
  }
);

//Server Initiation
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
