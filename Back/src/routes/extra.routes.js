const { Router } = require ('express');
const { getExtra } = require('../controllers/controllersExtra/getExtraController');
const { postExtra } = require('../controllers/controllersExtra/postExtraController');
const { putExtra } = require('../controllers/controllersExtra/putExtraController');
const { deleteExtra } = require('../controllers/controllersExtra/deleteExtraController');
const { getIdExtra } = require('../controllers/controllersExtra/getIdExtra.controller');
const extraRouter = Router();


extraRouter.get("/", getExtra)
extraRouter.post("/", postExtra)
extraRouter.get("/extra/:idExtraAct", getIdExtra)
extraRouter.put("/extra/:idExtraAct", putExtra)
extraRouter.delete("/extra/:idExtraAct", deleteExtra)

module.exports = extraRouter;