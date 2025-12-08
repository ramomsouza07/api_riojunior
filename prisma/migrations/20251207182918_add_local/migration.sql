/*
  Warnings:

  - Added the required column `local` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `local` VARCHAR(191) NOT NULL;
