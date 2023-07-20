const { Router } = require ('express');
const { postPaystore } = require("../handlers/handlersPaystore/postPaystoreHandler");

// const {getPaystoreId} = require("../controllers/controllersMembership/getMembershipIdController");
const { putPaystore } = require('../handlers/handlersPaystore/putPaystoreHandler');
const { getPaystorePlanId } = require('../controllers/controllersPaystore/getPaystoreController');
const paystoreRouter = Router();

paystoreRouter.get("/", )
// paystoreRouter.get("/paystore/get/:idPayment", getPaystoreId)
paystoreRouter.post("/", postPaystore);
paystoreRouter.put("/paystore/:id", putPaystore)
paystoreRouter.get("/:id", getPaystorePlanId)
paystoreRouter.get("/success", (req, res) => (res.json("SUCCESS")))
paystoreRouter.get("/cancel", (req, res) => (res.json("CANCEL")))

module.exports = paystoreRouter;