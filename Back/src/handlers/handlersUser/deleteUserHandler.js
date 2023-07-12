const { deleteUserController } = require("../../controllers/controllersUser/deleteUserController");

const deleteUser = async (req, res) => {
    
    const {id} = req.params
    try {
        const deleted = await deleteUserController(id)
        res.status(200).json(deleted);    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    deleteUser
}