-- AlterTable
ALTER TABLE `USUARIO` MODIFY `ROLL_USU` ENUM('Admin', 'Teacher', 'Student') NOT NULL DEFAULT 'Student';
