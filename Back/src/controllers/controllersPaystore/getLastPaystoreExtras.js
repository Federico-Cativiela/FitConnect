const { default: Stripe } = require('stripe');
const {prisma} = require ('../../db.js');

const stripe = new Stripe("sk_test_51NVc5JFVLHg8mbgAT7j3cU78uPv2ivnKUf30qOTMdS65zMcIOw1i24TGZq3NEq9Iz7cAw8J28mIi8I1d6Iu65a8s00Bl8unN39")

const getPaystoreExtras = async (req, res) => {
  const { uid, email, extras } = req.query

  try {

    const session = await stripe.checkout.sessions.create({
      line_items: [extras.map(e=>{
          return{
            price: e.type_activity,
            quantity: 1
          }
      })
      ],
      mode: 'payment',
      client_reference_id: uid,
      customer_email: email,
      success_url: 'https://fit-connect-two.vercel.app/success',
      cancel_url: 'https://fit-connect-two.vercel.app',
    })

    res.json(session)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
    getPaystoreExtras
}