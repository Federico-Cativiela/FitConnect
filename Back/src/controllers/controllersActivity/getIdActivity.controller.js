const {prisma} = require ('../../db.js');

const getActivityId = async (req, res) => {
  try {
    const actFound = await prisma.activity.findFirst({
    where: {
      idAct: parseInt(req.params.idAct)
    }
  })

  res.json(actFound);

  } catch (error) {
    console.log(error)
  }
}

module.exports = {getActivityId};