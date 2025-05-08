//import express
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Testing!");
});

const port = 4000;
app.listen(port, () => console.log(`Listening On port ${port}`));

