-- CreateTable
CREATE TABLE "Bots" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "id_tg" TEXT NOT NULL,

    CONSTRAINT "Bots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bots_name_key" ON "Bots"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Bots_id_tg_key" ON "Bots"("id_tg");
