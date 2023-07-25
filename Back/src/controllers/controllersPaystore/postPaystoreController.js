const {prisma} = require('../../db.js')
const { default: Stripe } = require('stripe');
const stripe = new Stripe("sk_test_51NVc5JFVLHg8mbgAT7j3cU78uPv2ivnKUf30qOTMdS65zMcIOw1i24TGZq3NEq9Iz7cAw8J28mIi8I1d6Iu65a8s00Bl8unN39")

const postPaystoreController = async (paymentInfo, idUser) => {
    const {invoice, amount_total, status} = paymentInfo 
    const invoiceDate = await stripe.invoices.retrieve(invoice)
    const urlInvoice = invoiceDate.hosted_invoice_url;
const data = {
    priceTotal: amount_total,
    status: status,
    invoice: urlInvoice,
    idUser: idUser,
    dateTime: "20-02-3001 || 20hs : 15min ARG"
}
/*     const newPayment = await prisma.paystore.create({
        data:{
            priceTotal: priceTotal,
            status: status,
            invoice: urlInvoice,
            idUser: idUser
        }
    }) */

    return data;
};

module.exports = {
    postPaystoreController
}