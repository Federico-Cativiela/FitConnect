const { prisma } = require('../../db.js');

const deleteActivitie = async (req, res) => {
  try {
    const deleted = await prisma.activity.delete(
      {
        where: {
          idAct: parseInt(req.params.idAct)
        }
      }
    )

    res.json(deleted)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteActivitie
};
//hola