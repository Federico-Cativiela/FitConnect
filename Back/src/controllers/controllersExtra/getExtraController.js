const {prisma} = require ('../../db.js');

const getExtra = async (req, res) => {
  try {
    const extras = await prisma.extraActivity.findMany()
    res.json(extras)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getExtra
}