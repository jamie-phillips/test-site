const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Wow what a great website 🤟 = Testing!");
});

app.listen(port, () => {});
