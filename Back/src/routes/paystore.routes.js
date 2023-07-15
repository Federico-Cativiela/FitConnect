const { Router } = require ('express');
const paystoreRouter = Router();

paystoreRouter.get("/", (req, res) => {
  res.json("Paystore Router")
})

module.exports = paystoreRouter;