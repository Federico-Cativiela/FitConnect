const { prisma } = require("../../db");

const lastPaystoreController = async (idUser) =>{
    const payment = await prisma.paystore.findFirst({
        where:{ userId: parseInt(idUser) },
        orderBy:{ idPayment: 'desc' },
        include:{membership:true,
                extraActivities:true||undefined}
    })
    return payment;
};

module.exports = lastPaystoreController;