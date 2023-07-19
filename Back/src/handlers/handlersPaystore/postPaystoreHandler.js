const {postPaystoreController} = require("../../controllers/controllersPaystore/postPaystoreController")

const postPaystore = async (req, res) => {
    try {
        const {priceTotal,status_payment} = req.body;
        const newPaystore = await postPaystoreController(priceTotal,status_payment)
        res.status(200).json(newPaystore);    
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
  postPaystore
}