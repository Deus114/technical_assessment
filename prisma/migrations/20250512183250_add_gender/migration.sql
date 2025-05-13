/*
  Warnings:

  - Added the required column `gender` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "gender" VARCHAR(20) NOT NULL;
