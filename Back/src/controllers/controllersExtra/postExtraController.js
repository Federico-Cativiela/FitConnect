const {prisma} = require ('../../db.js');

const postExtra = async (req, res) => {
  try {
    const newExtra = await prisma.extraActivity.create({
      data: {
        name: req.body,
        schedule: req.body,
        type_activity: req.body,
        rating: req.body,
        price: req.body
      }
    })
    res.json(newExtra)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  postExtra
}