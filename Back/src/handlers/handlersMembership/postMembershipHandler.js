const { postMembershipController } = require("../../controllers/controllersMembership/postMembershipController");

const postMembership = async (req, res) => {
    try {
        const {levelMembership, price,  duration, user,paystore} = req.body;
        const newMembership = await postMembershipController(levelMembership, price,duration, user,paystore)
        res.status(200).json(newMembership);    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
  postMembership
}
