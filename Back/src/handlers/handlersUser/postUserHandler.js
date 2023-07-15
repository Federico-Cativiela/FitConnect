const { postUserController } = require("../../controllers/controllersUser/postUserController");

const postUser = async (req, res) => {
    try {
        const rol = false;
        const userStatus = true;
        const {uid, name, surname, email, password, membershipId} = req.body;
        const newUser = await postUserController(uid, name, surname, email, password, rol, userStatus, membershipId)
        res.status(200).json(newUser);    
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
  postUser
}