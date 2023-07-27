const {prisma} = require('../../db.js')
const { Stripe } = require("stripe");

const stripe = new Stripe("sk_test_51NVc5JFVLHg8mbgAT7j3cU78uPv2ivnKUf30qOTMdS65zMcIOw1i24TGZq3NEq9Iz7cAw8J28mIi8I1d6Iu65a8s00Bl8unN39");

const postMembershipController = async (amount, interval, name) => {

    
    const duration = interval === "month" ? 31 : 365

    const membershipStripe = await stripe.plans.create({
        amount: amount,
        currency: 'usd',
        interval: interval,
        product: {
            name: name
        }
    });   
    
    const membershipDb = await prisma.membership.create({
        data:{
            levelMembership: name,
            price: amount,
            duration: duration,
            planId: membershipStripe.id, 
        }
    })

    return membershipStripe
};
 
module.exports = {
    postMembershipController
}
