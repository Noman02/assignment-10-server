const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const courseCollection = require("./Data/data.json");

app.get("/", (req, res) => {
  res.send("server test ");
});

app.get("/courseCollection", (req, res) => {
  res.send(courseCollection);
});

app.listen(Port, () => {
  console.log("server is running ", Port);
});
