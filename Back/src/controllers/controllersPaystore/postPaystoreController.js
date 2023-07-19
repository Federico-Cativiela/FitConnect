const {prisma} = require('../../db.js')

const postPaystoreController = async (priceTotal,status_payment) => {
    console.log(priceTotal);
    const newPayment = await prisma.paystore.create({
        data:{
            priceTotal: priceTotal,
            status_payment: status_payment,
        }
    })

    return newPayment;
};

module.exports = {
    postPaystoreController
}