const { getMembershipController } = require("../../controllers/controllersMembership/getMembershipController");

const getMembership = async (req, res) => {
    const { filter } = req.query
    try {
        const results = await getMembershipController(filter)
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    getMembership
}