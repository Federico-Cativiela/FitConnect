const { Router } = require ('express');
const { postPaystore } = require("../handlers/handlersPaystore/postPaystoreHandler");

// const {getPaystoreId} = require("../controllers/controllersMembership/getMembershipIdController");
const { putPaystore } = require('../handlers/handlersPaystore/putPaystoreHandler');
const { getPaystorePlanId } = require('../controllers/controllersPaystore/getPaystoreController');
const { getSucces } = require('../controllers/controllersPaystore/getSucces');
const getLastPaystore = require('../handlers/handlersPaystore/getLastPaystore');
const postMailerSucces = require('../controllers/controllersMailer/mailerUserController')
const paystoreRouter = Router();

//paystoreRouter.get("/", )
// paystoreRouter.get("/paystore/get/:idPayment", getPaystoreId)
paystoreRouter.post("/", postPaystore);
paystoreRouter.put("/paystore/:id", putPaystore)
paystoreRouter.get("/success", getSucces);
paystoreRouter.post("/success", postMailerSucces);
paystoreRouter.get("/last/:idUser", getLastPaystore);
paystoreRouter.get("/cancel", (req, res) => (res.json("CANCEL")))
paystoreRouter.get("/", getPaystorePlanId)

module.exports = paystoreRouter;