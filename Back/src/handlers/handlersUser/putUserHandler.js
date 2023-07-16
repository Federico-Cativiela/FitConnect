const { putUserController } = require("../../controllers/controllersUser/putUserController");

const putUser = async (req, res) => {
    
    const {id} = req.params
    const data = req.body
    try {
        const put = await putUserController(id, data)
        res.status(200).json(put);    
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    putUser
}