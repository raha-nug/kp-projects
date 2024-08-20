/*
  Warnings:

  - You are about to drop the column `nama` on the `desablankspot` table. All the data in the column will be lost.
  - Added the required column `name` to the `DesaBlankspot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `desablankspot` DROP COLUMN `nama`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
