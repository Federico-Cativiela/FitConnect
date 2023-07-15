const { Router } = require ('express');
const { postMembership } = require('../handlers/handlersMembership/postMembershipHandler');
const { getMembership } = require('../handlers/handlersMembership/getMembershipHandler');
const {getMembershipId} = require("../controllers/controllersMembership/getMembershipIdController");
const { putMembership } = require('../controllers/controllersMembership/putMembershipController');
const { deleteMembership } = require('../controllers/controllersMembership/deleteMembershipController')
const membershipRouter = Router();

membershipRouter.get("/", getMembership)
membershipRouter.get("/membership/get/:idMembership", getMembershipId)
membershipRouter.post("/", postMembership);
membershipRouter.put("/membership/put/:idMembership", putMembership)
membershipRouter.delete("/membership/:idMembership", deleteMembership)

module.exports = membershipRouter;