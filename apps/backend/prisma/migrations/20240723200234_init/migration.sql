-- CreateTable
CREATE TABLE "professional" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "ratings" INTEGER NOT NULL,

    CONSTRAINT "professional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total_slots" INTEGER NOT NULL,
    "logo_url" TEXT NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment" (
    "id" SERIAL NOT NULL,
    "client_email" TEXT NOT NULL,
    "date" TIMESTAMPTZ(3) NOT NULL,
    "professional_id" INTEGER NOT NULL,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AppointmentToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "professional_name_key" ON "professional"("name");

-- CreateIndex
CREATE UNIQUE INDEX "service_name_key" ON "service"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentToService_AB_unique" ON "_AppointmentToService"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentToService_B_index" ON "_AppointmentToService"("B");

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToService" ADD CONSTRAINT "_AppointmentToService_A_fkey" FOREIGN KEY ("A") REFERENCES "appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToService" ADD CONSTRAINT "_AppointmentToService_B_fkey" FOREIGN KEY ("B") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
