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

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
