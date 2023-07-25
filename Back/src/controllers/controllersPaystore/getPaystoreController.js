const { default: Stripe } = require('stripe');
const {prisma} = require ('../../db.js');

const stripe = new Stripe("sk_test_51NVc5JFVLHg8mbgAT7j3cU78uPv2ivnKUf30qOTMdS65zMcIOw1i24TGZq3NEq9Iz7cAw8J28mIi8I1d6Iu65a8s00Bl8unN39")

const getPaystorePlanId = async (req, res) => {
  const { idMembership, uid, email, name, surname, password } = req.query
  const idMemb = Number(idMembership)
  try {
    const membership = await prisma.membership.findUnique({
      where: {
        idMembership: idMemb,
      },
      select: {
        planId: true
      }
    })

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: membership.planId,
          quantity: 1
        },
      ],
      mode: 'subscription',
      metadata:{
        idMembership:idMemb,
        name:name,
        surname:surname,
        password:password
      },
      client_reference_id: uid,
      customer_email: email,
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:3001/paystore/cancel',
    })

    res.json(session)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getPaystorePlanId
}