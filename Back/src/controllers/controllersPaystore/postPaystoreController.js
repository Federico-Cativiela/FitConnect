const {prisma} = require('../../db.js')
const { default: Stripe } = require('stripe');
const stripe = new Stripe("sk_test_51NVc5JFVLHg8mbgAT7j3cU78uPv2ivnKUf30qOTMdS65zMcIOw1i24TGZq3NEq9Iz7cAw8J28mIi8I1d6Iu65a8s00Bl8unN39")

const postPaystoreController = async (paymentInfo, idUser) => {
    const {invoice, amount_total, status} = paymentInfo
    const idMembership = paymentInfo.metadata.idMembership 
    const invoiceDate = await stripe.invoices.retrieve(invoice)
    const urlInvoice = invoiceDate.hosted_invoice_url;

    const newPayment = await prisma.paystore.create({
        data:{
            priceTotal: amount_total,
            status_payment: status,
            invoice: urlInvoice,
            userId: idUser,
            membershipId: Number(idMembership)
        }
    })

    return newPayment;
};

module.exports = {
    postPaystoreController
}