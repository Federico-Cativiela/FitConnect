const { postUserController } = require("../../controllers/controllersUser/postUserController");

const postUser = async (req, res) => {
    try {
        const {name, surname, email, password, rol, userStatus, membershipId} = req.body;
        const newUser = await postUserController(name, surname, email, password, rol, userStatus, membershipId)
        res.status(200).json(newUser);    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
  postActivity
}