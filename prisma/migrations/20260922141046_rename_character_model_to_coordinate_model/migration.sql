/*
  Warnings:

  - You are about to drop the `characters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "characters";

-- CreateTable
CREATE TABLE "coords" (
    "id" SERIAL NOT NULL,
    "min_x" INTEGER NOT NULL,
    "max_x" INTEGER NOT NULL,
    "min_y" INTEGER NOT NULL,
    "max_y" INTEGER NOT NULL,

    CONSTRAINT "coords_pkey" PRIMARY KEY ("id")
);
