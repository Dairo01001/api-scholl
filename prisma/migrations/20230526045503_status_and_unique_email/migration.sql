/*
  Warnings:

  - A unique constraint covering the columns `[NOMBRE_ASIG]` on the table `ASIGNATURA` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[CORREO_DOC]` on the table `DOCENTE` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NOMBRE_GRA]` on the table `GRADO` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NOMBRE_GRU]` on the table `GRUPO` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `ACUDIENTE` ADD COLUMN `ESTADO_ACU` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `ASIGNATURA` ADD COLUMN `ESTADO_ASIG` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `BLOQUE_HORA` ADD COLUMN `ESTADO` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `DIA_SEMANA` ADD COLUMN `ESTADO_DIA_SEMANA` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `DOCENTE` ADD COLUMN `ESTADO_DOC` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `DOCUMENTO` ADD COLUMN `ESTADO_DOC` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `ESTUDIANTE` ADD COLUMN `ESTADO_EST` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `GRADO` ADD COLUMN `ESTADO_GRA` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `HORARIO` ADD COLUMN `ESTADO` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `NOTA` ADD COLUMN `ESTADO_NOTA` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `OBSERVACION` ADD COLUMN `ESTADO_OBS` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `PERSONA` ADD COLUMN `ESTADO_PER` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `RH` ADD COLUMN `ESTADO_RH` BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX `ASIGNATURA_NOMBRE_ASIG_key` ON `ASIGNATURA`(`NOMBRE_ASIG`);

-- CreateIndex
CREATE UNIQUE INDEX `DOCENTE_CORREO_DOC_key` ON `DOCENTE`(`CORREO_DOC`);

-- CreateIndex
CREATE UNIQUE INDEX `GRADO_NOMBRE_GRA_key` ON `GRADO`(`NOMBRE_GRA`);

-- CreateIndex
CREATE UNIQUE INDEX `GRUPO_NOMBRE_GRU_key` ON `GRUPO`(`NOMBRE_GRU`);
