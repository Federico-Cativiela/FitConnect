const { Router } = require ('express');
const membershipRouter = Router();

membershipRouter.get("/", (req, res) => {
  res.json("Membership Router")
})

module.exports = membershipRouter;