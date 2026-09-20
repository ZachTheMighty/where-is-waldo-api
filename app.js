const express = require("express");
require("dotenv").config();

const app = express();

app.use((req, res) => res.json({ message: "negro" }));

const port = process.env.PORT;

app.listen(port, (error) => {
  if (error) throw error;
  console.log(port);
});
