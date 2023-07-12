const { putUserController } = require("../../controllers/controllersUser/putUserController");

const putUser = async (req, res) => {
    
    const {id} = req.params
    try {
        const put = await putUserController(id)
        res.status(200).json(put);    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    putUser
}