const { postActivityController } = require("../../controllers/controllersActivity/postActivityController");

const postActivity = async (req, res) => {
    try {
        const {name, schedule, type_activity, rating} = req.body;
        const newActivity = await postActivityController(name, schedule, type_activity, rating)
        res.status(200).json(newActivity);    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
  postActivity
}