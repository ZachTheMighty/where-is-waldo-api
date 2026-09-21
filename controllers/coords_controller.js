const prisma = require("../lib/prisma.ts");

const checkCoords = async (req, res) => {
  let response = { character: { id: null }, found: false };

  const characters = await prisma.character.findMany();
  characters.forEach((character) => {
    if (
      req.body.x >= character.minX &&
      req.body.x <= character.maxX &&
      req.body.y >= character.minY &&
      req.body.y <= character.maxY
    )
      response = { character, found: true };
  });

  res.json(response);
};

module.exports = { checkCoords };
