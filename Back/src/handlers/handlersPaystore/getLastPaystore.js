const lastPaystoreController = require("../../controllers/controllersPaystore/getLastPaystoreController");

const getLastPaystore = async (req, res)=>{
    const { idUser } = req.params
    try {
        const payment = await lastPaystoreController(idUser)
        console.log(payment);
        res.status(200).send(payment)
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
};

module.exports = getLastPaystore;