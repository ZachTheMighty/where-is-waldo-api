const prisma = require("./lib/prisma.ts");

async function main() {
  await prisma.coord.create({
    data: {
      minX: 25,
      maxX: 27,
      minY: 34,
      maxY: 39,
    },
  });
  await prisma.coord.create({
    data: {
      minX: 60,
      maxX: 61,
      minY: 38,
      maxY: 41,
    },
  });
  await prisma.coord.create({
    data: {
      minX: 2,
      maxX: 5,
      minY: 42,
      maxY: 45,
    },
  });
  await prisma.coord.create({
    data: {
      minX: 63,
      maxX: 64,
      minY: 47,
      maxY: 50,
    },
  });
}

main()
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());
