const { Router } = require ('express');
const extraRouter = Router();

extraRouter.get("/", (req, res) => {
  res.json("Extra Router")
})

module.exports = extraRouter;