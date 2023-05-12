-- CreateTable
CREATE TABLE "baju" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "merk" TEXT NOT NULL,

    CONSTRAINT "baju_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "baju_merk_key" ON "baju"("merk");
