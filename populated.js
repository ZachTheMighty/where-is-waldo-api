const prisma = require("./lib/prisma.ts");

async function main() {
  await prisma.coord.create({
    data: {
      minX: 44,
      minY: 516,
      maxX: 107,
      maxY: 561,
    },
  });
  await prisma.coord.create({
    data: {
      minX: 484,
      minY: 420,
      maxX: 518,
      maxY: 479,
    },
  });
  await prisma.coord.create({
    data: {
      minX: 1150,
      minY: 469,
      maxX: 1183,
      maxY: 511,
    },
  });
  await prisma.coord.create({
    data: {
      minX: 1216,
      minY: 579,
      maxX: 1236,
      maxY: 612,
    },
  });
}

main()
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());
