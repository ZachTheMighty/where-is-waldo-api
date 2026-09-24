const prisma = require("./lib/prisma.ts");

async function main() {
  const coords = [
    { id: 1, minX: 25, maxX: 27, minY: 34, maxY: 39 },
    { id: 2, minX: 60, maxX: 61, minY: 38, maxY: 41 },
    { id: 3, minX: 2, maxX: 5, minY: 42, maxY: 45 },
    { id: 4, minX: 63, maxX: 64, minY: 47, maxY: 50 },
  ];

  for (const coord of coords) {
    await prisma.coord.upsert({
      where: { id: coord.id },
      update: {},
      create: coord,
    });
  }
}

main()
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());
