const { Router } = require ('express');
const userRouter = Router();
const {getUsers} = require("../controllers/controllersUser/getUserController");
const {getUserId} = require("../controllers/controllersUser/getUserIdController");

userRouter.get("/",  getUsers)
userRouter.get("/user/:id", getUserId)

module.exports = userRouter;