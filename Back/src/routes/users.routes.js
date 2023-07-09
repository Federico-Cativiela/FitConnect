const { Router } = require ('express');
const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json("User Router")
})

module.exports = userRouter;