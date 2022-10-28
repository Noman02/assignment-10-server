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

app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const singleData = courseCollection.find((p) => p.id == id);
  res.send(singleData);
});

app.listen(Port, () => {
  console.log("server is running ", Port);
});
