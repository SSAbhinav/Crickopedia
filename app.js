const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 1000;


//ww
//const url='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
const url =
  'mongodb+srv://personaldb.9iqr5.mongodb.net/CustomerDB" --username Abhi_01 --password dsrfgob114';

mongoose.connect(url, { useNewUrlParser: true }, () => {
  console.log("connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("finding success");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/api/cricketers", (req, res) => {
  res.send(["virat", "msd", "rohit", "hardik", "ash","jaddu"]);
});
