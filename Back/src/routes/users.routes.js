const { Router } = require ('express');
const userRouter = Router();
const {getUsers} = require("../controllers/controllersUser/getUserController");
const {getUserId} = require("../controllers/controllersUser/getUserIdController");
const { postUser } = require('../handlers/handlersUser/postUserHandler');

userRouter.get("/",  getUsers)
userRouter.get("/user/:id", getUserId)
userRouter.post("/", postUser)

module.exports = userRouter;