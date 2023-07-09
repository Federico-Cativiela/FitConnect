const { Router } = require('express');
const activitieRouter = require("./activities.routes.js");
const membershipRouter = require('./membership.routes.js');

const router = Router();

router.use('/', activitieRouter);
router.use('/', membershipRouter);


module.exports = router;