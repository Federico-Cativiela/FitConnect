const { Router } = require('express');
const activitieRouter = require("./activities.routes.js");
const membershipRouter = require('./membership.routes.js');
const userRouter = require('./users.routes.js');
const paystoreRouter = require('./paystore.routes.js');
const extraRouter = require('./extra.routes.js');

const routesPf = Router();

routesPf.use("/activitie", activitieRouter);
routesPf.use("/membership", membershipRouter);
routesPf.use("/user", userRouter);
routesPf.use("/paystore", paystoreRouter);
routesPf.use("/extra", extraRouter);

module.exports = routesPf;