const prisma = require("../lib/prisma.ts");

const checkCoords = async (req, res) => {
  let response = { character: { id: null }, found: false };

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

module.exports = { checkCoords };
