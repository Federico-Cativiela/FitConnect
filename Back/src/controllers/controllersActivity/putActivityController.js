const { prisma } = require("../../db.js");

const putActivitie = async (req, res) => {
  console.log(req.body, "hola aca estoy");
  try {
    const put = await prisma.activity.update({
      where: {
        idAct: parseInt(req.params.idAct),
      },

      data: req.body,
    });

    res.json(put);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  putActivitie,
};
