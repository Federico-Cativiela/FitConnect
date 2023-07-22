const {prisma} = require('../../db.js')

const postPaystoreController = async (data) => {
    const id = data.id
    const total = data.amount_total
    const status = data.status

    console.log(id, total, status);
/*     const newPayment = await prisma.paystore.create({
        data:{
            priceTotal: priceTotal,
            status_payment: status_payment,
        }
    })

    return newPayment; */
    return "hola"
};

module.exports = {
    postPaystoreController
}