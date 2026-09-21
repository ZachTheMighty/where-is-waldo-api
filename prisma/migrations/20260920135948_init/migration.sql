-- CreateTable
CREATE TABLE "character" (
    "id" SERIAL NOT NULL,
    "min_x" INTEGER NOT NULL,
    "max_x" INTEGER NOT NULL,
    "min_y" INTEGER NOT NULL,
    "max_y" INTEGER NOT NULL,

    CONSTRAINT "character_pkey" PRIMARY KEY ("id")
);
