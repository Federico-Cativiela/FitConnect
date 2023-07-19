const { Router } = require ('express');
const { postPaystore } = require("../handlers/handlersPaystore/postPaystoreHandler");
const { getPaystore } = require('../controllers/controllersPaystore/getPaystoreController');
// const {getPaystoreId} = require("../controllers/controllersMembership/getMembershipIdController");
// const { putPaystore } = require('../controllers/controllersMembership/putMembershipController');
const paystoreRouter = Router();

paystoreRouter.get("/", getPaystore)
// paystoreRouter.get("/paystore/get/:idPayment", getPaystoreId)
paystoreRouter.post("/", postPaystore);
// paystoreRouter.put("/paystore/put/:idPayment", putPaystore)


module.exports = paystoreRouter;