const { Router } = require ('express');
const activitieRouter = Router();

activitieRouter.get("/", (req, res) => {
  res.json("Activity Router")
})

module.exports = activitieRouter;