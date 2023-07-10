const { Router } = require ('express');
const { getExtra } = require('../controllers/controllersExtra/getExtraController');
const { postExtra } = require('../controllers/controllersExtra/postExtraController');
const extraRouter = Router();


extraRouter.get("/", getExtra)
extraRouter.post("/", postExtra)

module.exports = extraRouter;