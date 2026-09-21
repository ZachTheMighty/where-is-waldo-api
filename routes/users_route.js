const route = require("express").Router();
const controller = require("../controllers/users_controller.js");

route.get("/top", controller.getTopUsers);
route.post("/", controller.createUser);

module.exports = route;
