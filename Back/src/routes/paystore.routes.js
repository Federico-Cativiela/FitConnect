const { Router } = require ('express');
const { postPaystore } = require("../handlers/handlersPaystore/postPaystoreHandler");
const { getPaystore } = require('../controllers/controllersPaystore/getPaystoreController');
// const {getPaystoreId} = require("../controllers/controllersMembership/getMembershipIdController");
const { putPaystore } = require('../handlers/handlersPaystore/putPaystoreHandler');
const paystoreRouter = Router();

paystoreRouter.get("/", getPaystore)
// paystoreRouter.get("/paystore/get/:idPayment", getPaystoreId)
paystoreRouter.post("/", postPaystore);
paystoreRouter.put("/paystore/:id", putPaystore)


module.exports = paystoreRouter;