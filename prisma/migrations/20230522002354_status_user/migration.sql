-- AlterTable
ALTER TABLE `USUARIO` ADD COLUMN `status` ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active';
