-- CreateTable
CREATE TABLE "User" (
    "idUser" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expire_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rol" BOOLEAN NOT NULL,
    "idMembership" SERIAL NOT NULL,
    "userStatus" BOOLEAN NOT NULL,
    "membershipId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Activity" (
    "idAct" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "schedule" TEXT NOT NULL,
    "type_activity" TEXT NOT NULL,
    "rating" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("idAct")
);

-- CreateTable
CREATE TABLE "Membership" (
    "idMembership" SERIAL NOT NULL,
    "levelMembership" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("idMembership")
);

-- CreateTable
CREATE TABLE "Paystore" (
    "idPayment" SERIAL NOT NULL,
    "idMembership" INTEGER NOT NULL,
    "priceTotal" DOUBLE PRECISION NOT NULL,
    "status_payment" TEXT NOT NULL,
    "idUser" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "membershipId" INTEGER NOT NULL,

    CONSTRAINT "Paystore_pkey" PRIMARY KEY ("idPayment")
);

-- CreateTable
CREATE TABLE "ExtraActivity" (
    "idExtraAct" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "schedule" TEXT NOT NULL,
    "type_activity" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ExtraActivity_pkey" PRIMARY KEY ("idExtraAct")
);

-- CreateTable
CREATE TABLE "MembershipOnActivity" (
    "membershipId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "MembershipOnActivity_pkey" PRIMARY KEY ("membershipId","activityId")
);

-- CreateTable
CREATE TABLE "PaystoreOnExtraActivity" (
    "paymentId" INTEGER NOT NULL,
    "extraActivityId" INTEGER NOT NULL,

    CONSTRAINT "PaystoreOnExtraActivity_pkey" PRIMARY KEY ("paymentId","extraActivityId")
);

-- CreateTable
CREATE TABLE "UserOnExtraActivity" (
    "userId" INTEGER NOT NULL,
    "extraActivityId" INTEGER NOT NULL,

    CONSTRAINT "UserOnExtraActivity_pkey" PRIMARY KEY ("userId","extraActivityId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("idMembership") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paystore" ADD CONSTRAINT "Paystore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paystore" ADD CONSTRAINT "Paystore_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("idMembership") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipOnActivity" ADD CONSTRAINT "MembershipOnActivity_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("idMembership") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipOnActivity" ADD CONSTRAINT "MembershipOnActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("idAct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaystoreOnExtraActivity" ADD CONSTRAINT "PaystoreOnExtraActivity_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Paystore"("idPayment") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaystoreOnExtraActivity" ADD CONSTRAINT "PaystoreOnExtraActivity_extraActivityId_fkey" FOREIGN KEY ("extraActivityId") REFERENCES "ExtraActivity"("idExtraAct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnExtraActivity" ADD CONSTRAINT "UserOnExtraActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnExtraActivity" ADD CONSTRAINT "UserOnExtraActivity_extraActivityId_fkey" FOREIGN KEY ("extraActivityId") REFERENCES "ExtraActivity"("idExtraAct") ON DELETE RESTRICT ON UPDATE CASCADE;
