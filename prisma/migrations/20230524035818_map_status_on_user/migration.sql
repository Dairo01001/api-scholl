/*
  Warnings:

  - You are about to drop the column `status` on the `USUARIO` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `USUARIO` DROP COLUMN `status`,
    ADD COLUMN `ESTADO_USU` ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active';
