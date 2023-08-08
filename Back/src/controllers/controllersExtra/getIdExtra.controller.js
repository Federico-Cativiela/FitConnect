const {prisma} = require ('../../db.js');

const getIdExtra = async (req, res) => {
  try {
    const actFound = await prisma.extraActivity.findFirst({
    where: {
      idExtraAct: parseInt(req.params.idExtraAct)
    }
  })

  res.json(actFound);

  } catch (error) {
    console.log(error)
  }
}

module.exports = {getIdExtra};