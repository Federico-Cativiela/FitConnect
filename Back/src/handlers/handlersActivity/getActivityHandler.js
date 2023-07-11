const { getActivityController } = require("../../controllers/controllersActivity/deleteActivityController");

const getActivity = async (req, res) => {
    try {
        const results = await getActivityController()
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    getActivity
}