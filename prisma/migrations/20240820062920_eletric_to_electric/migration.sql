/*
  Warnings:

  - You are about to drop the column `eletric_capacity` on the `desablankspot` table. All the data in the column will be lost.
  - You are about to drop the column `eletric_resources` on the `desablankspot` table. All the data in the column will be lost.
  - Added the required column `electric_capacity` to the `DesaBlankspot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `electric_resources` to the `DesaBlankspot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `desablankspot` DROP COLUMN `eletric_capacity`,
    DROP COLUMN `eletric_resources`,
    ADD COLUMN `electric_capacity` VARCHAR(191) NOT NULL,
    ADD COLUMN `electric_resources` VARCHAR(191) NOT NULL;
