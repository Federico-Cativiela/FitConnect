const { Router } = require ('express');
const { postActivity } = require('../handlers/handlersActivity/postActivityHandler');
const { getActivity } = require('../handlers/handlersActivity/getActivityHandler');
const { putActivitie } = require('../controllers/controllersActivity/putActivityController');
const { deleteActivitie } = require('../controllers/controllersActivity/deleteActivityController');
const { getActivityId } = require('../controllers/controllersActivity/getIdActivity.controller');

const activitieRouter = Router();

activitieRouter.get("/", getActivity)
activitieRouter.get("/activitie/:idAct", getActivityId)
activitieRouter.post("/", postActivity);
activitieRouter.put("/activitie/put/:idAct", putActivitie)
activitieRouter.delete("/activitie/:idAct", deleteActivitie)

module.exports = activitieRouter;