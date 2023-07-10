const { Router } = require ('express');
const { postActivity } = require('../handlers/handlersActivity/postActivityHandler');
const activitieRouter = Router();

activitieRouter.get("/", (req, res) => {
  res.json("Activity Router")
})

activitieRouter.post("/", postActivity);

module.exports = activitieRouter;