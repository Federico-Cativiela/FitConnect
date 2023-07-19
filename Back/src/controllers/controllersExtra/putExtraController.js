const { prisma } = require('../../db.js');

const putExtra = async (req, res) => {
  try {
    const put = await prisma.extraActivity.update(
      {
        where: {
            idExtraAct: parseInt(req.params.idExtraAct)
        },
        data: req.body
      })

    res.json(put)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  putExtra
};