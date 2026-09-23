const route = require("express").Router();
const controller = require("../controllers/coords_controller.js");

route.get("/", controller.getAllCoords);
route.post("/", controller.checkCoords);

module.exports = route;
