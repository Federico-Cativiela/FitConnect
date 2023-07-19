const { postMembershipController } = require("../../controllers/controllersMembership/postMembershipController");

const postMembership = async (req, res) => {
    try {
        const {amount, interval, name} = req.body;
        const newMembership = await postMembershipController(amount, interval, name)
        res.status(200).json(newMembership);    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
  postMembership
}
