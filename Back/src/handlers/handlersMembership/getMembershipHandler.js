const { getMembershipController } = require("../../controllers/controllersMembership/getMembershipController");

const getMembership = async (req, res) => {
    try {
        const results = await getMembershipController()
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    getMembership
}