const {postPaystoreController} = require("../../controllers/controllersPaystore/postPaystoreController")
const { default: Stripe } = require('stripe');
const {prisma} = require ('../../db.js');
const { text } = require("express");
const stripe = new Stripe("sk_test_51NVc5JFVLHg8mbgAT7j3cU78uPv2ivnKUf30qOTMdS65zMcIOw1i24TGZq3NEq9Iz7cAw8J28mIi8I1d6Iu65a8s00Bl8unN39")
const keyPublic = "pk_test_51NVc5JFVLHg8mbgAH2S74Dm10Es7W1ALmkKBw04eAsXbDvM1fj4QsnkcTfKZOmhU1KmURK2iyVkZTuGmR9aarIiv006DT6V31N"

const postPaystore = async (req, res) => {
    const {data} = req.body;
    try {
        const newPayment = await postPaystoreController(data)        
        res.status(200).send(newPayment);
    } catch (error) {
        //console.error("Error al procesar el evento del webhook:", error);
        res.status(400).send(`Webhook Error: ${error.message}`);
    }
};

module.exports = {
  postPaystore
}