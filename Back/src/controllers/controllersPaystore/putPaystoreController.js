const { prisma } = require("../../db");

const putPaystoreController = async (id, data) => {
    const paystore = await prisma.paystore.update({
        where: {
          idPayment: Number(id)
        },
        data: data,
      });

    return paystore;
};

module.exports = {
    putPaystoreController,
};
