const checkCoords = async (req, res) => {
  let foundCharacter = false;

  const characters = await prisma.character.findMany();
  characters.forEach((character) => {
    if (
      req.body.x >= character.minX &&
      req.body.x <= character.maxX &&
      req.body.y >= character.minY &&
      req.body.y <= character.maxY
    )
      foundCharacter = true;
  });

  res.json({ foundCharacter });
};

module.exports = { checkCoords };
