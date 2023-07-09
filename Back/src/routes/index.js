const { Router } = require('express');
const activitieRouter = require("./activities.routes.js");
const membershipRouter = require('./membership.routes.js');
const userRouter = require('./users.routes.js');
const paystoreRouter = require('./paystore.routes.js');
const extraRouter = require('./extra.routes.js');

const router = Router();

router.use('/', activitieRouter);
router.use('/', membershipRouter);
router.use('/', userRouter);
router.use('/', paystoreRouter);
router.use('/', extraRouter)

module.exports = router;