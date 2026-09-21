const express = require("express");
require("dotenv").config();

const coordsRoute = require("./routes/coords_routes.js");

const app = express();

app.use(require("cors")());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/coords", coordsRoute);

const port = process.env.PORT;

app.listen(port, (error) => {
  if (error) throw error;
  console.log(port);
});
