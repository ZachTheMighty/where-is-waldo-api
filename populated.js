const prisma = require("./lib/prisma.ts");

async function main() {
  await prisma.character.create({
    data: {
      minX: 26,
      maxX: 27,
      minY: 34,
      maxY: 38,
    },
  });
  await prisma.character.create({
    data: {
      minX: 59,
      maxX: 61,
      minY: 38,
      maxY: 41,
    },
  });
  await prisma.character.create({
    data: {
      minX: 2,
      maxX: 5,
      minY: 42,
      maxY: 45,
    },
  });
  await prisma.character.create({
    data: {
      minX: 63,
      maxX: 64,
      minY: 47,
      maxY: 49,
    },
  });
}

main()
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());
