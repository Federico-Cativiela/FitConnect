const { Router } = require ('express');
const { postActivity } = require('../handlers/handlersActivity/postActivityHandler');
const { getActivity } = require('../handlers/handlersActivity/getActivityHandler');
const activitieRouter = Router();

activitieRouter.get("/", getActivity)
activitieRouter.post("/", postActivity);

module.exports = activitieRouter;