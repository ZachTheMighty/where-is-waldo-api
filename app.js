const express = require("express");
require("dotenv").config();

const coordsRoute = require("./routes/coords_routes.js");
const usersRoute = require("./routes/users_route.js");

const app = express();

app.use(require("cors")());
app.use(express.json());

app.use("/coords", coordsRoute);
app.use("/users", usersRoute);

const port = process.env.PORT;

app.listen(port, (error) => {
  if (error) throw error;
  console.log(port);
});
