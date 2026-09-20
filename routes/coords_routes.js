const route = require("express").Router();
const controller = require("../controllers/coords_controller.js");

route.post("/", controller.checkCoords);

module.exports = route;
