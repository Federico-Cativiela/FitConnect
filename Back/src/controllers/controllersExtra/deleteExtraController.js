const { prisma } = require('../../db.js');

const deleteExtra = async (req, res) => {
  try {
    const deleted = await prisma.extraActivity.delete(
      {
        where: {
            idExtraAct: parseInt(req.params.idExtraAct)
        }
      }
    )

    res.json(deleted)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteExtra
};