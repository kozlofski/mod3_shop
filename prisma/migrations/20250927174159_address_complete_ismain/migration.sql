/*
  Warnings:

  - You are about to drop the column `street` on the `Address` table. All the data in the column will be lost.
  - Added the required column `completeAddress` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Address" DROP COLUMN "street",
ADD COLUMN     "completeAddress" TEXT NOT NULL,
ADD COLUMN     "isMain" BOOLEAN,
ADD COLUMN     "province" TEXT NOT NULL;
