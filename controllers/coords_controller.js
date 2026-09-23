const prisma = require("../lib/prisma.ts");

const getAllCoords = async (req, res) => {
  const coords = await prisma.coord.findMany();
  res.json(coords);
};

const checkCoords = async (req, res) => {
  let response = { coord: { id: null }, found: false };

  const coords = await prisma.coord.findMany();
  coords.forEach((coord) => {
    if (
      req.body.x >= coord.minX &&
      req.body.x <= coord.maxX &&
      req.body.y >= coord.minY &&
      req.body.y <= coord.maxY
    )
      response = { coord, found: true };
  });

  res.json(response);
};

module.exports = { checkCoords, getAllCoords };
