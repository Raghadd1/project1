const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Project1 🚀");
});

app.get("/name", (req, res) => {
  res.send("My name is Raghad");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});