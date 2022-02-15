const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json()); // for parsing application/json - important to take json input as object

app.use(cors());

dotenv.config();

//Routes

//Databasce Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(
  () => {
    console.log("Mongo Cloud Database Connected Successfully!");
  },
  (err) => {
    console.log("Error: ", err);
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
