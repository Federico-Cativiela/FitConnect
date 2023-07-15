const { getActivityController } = require("../../controllers/controllersActivity/getActivityController");

const getActivity = async (req, res) => {
    const { filter, order } = req.query;
    try {
        const activities = await getActivityController(filter, order)
        res.status(200).json(activities);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    getActivity
}