/*
  Warnings:

  - Added the required column `SKUID` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "SKUID" TEXT NOT NULL,
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL;
