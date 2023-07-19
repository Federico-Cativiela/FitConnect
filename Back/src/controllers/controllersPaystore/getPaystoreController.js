const {prisma} = require ('../../db.js');

const getPaystore = async (req, res) => {
  try {
    const paystore = await prisma.paystore.findMany()
    res.json(paystore)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getPaystore
}