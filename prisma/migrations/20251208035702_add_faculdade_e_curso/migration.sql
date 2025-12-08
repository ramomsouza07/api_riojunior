/*
  Warnings:

  - Added the required column `curso` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `faculdade` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `curso` VARCHAR(191) NOT NULL,
    ADD COLUMN `faculdade` VARCHAR(191) NOT NULL;
