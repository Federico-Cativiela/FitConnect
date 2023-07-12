const { Router } = require ('express');
const userRouter = Router();
const {getUsers} = require("../controllers/controllersUser/getUserController");
const {getUserId} = require("../controllers/controllersUser/getUserIdController");
const { postUser } = require('../handlers/handlersUser/postUserHandler');
const { deleteUser } = require('../handlers/handlersUser/deleteUserHandler');
const { putUser } = require('../handlers/handlersUser/putUserHandler');

userRouter.get("/",  getUsers)
userRouter.get("/user/:id", getUserId)
userRouter.post("/", postUser)
userRouter.delete("/:id", deleteUser)
userRouter.put("/:id", putUser)

module.exports = userRouter;