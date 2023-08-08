const { putPaystoreController } = require("../../controllers/controllersPaystore/putPaystoreController");

const putPaystore = async (req, res) => {
    
    const {id} = req.params
    const data = req.body
    try {
        const result = await putPaystoreController(id, data)
        res.status(200).json(result);    
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    putPaystore
}