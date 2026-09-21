/*
  Warnings:

  - You are about to drop the `character` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "character";

-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "min_x" INTEGER NOT NULL,
    "max_x" INTEGER NOT NULL,
    "min_y" INTEGER NOT NULL,
    "max_y" INTEGER NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);
