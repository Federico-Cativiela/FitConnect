const { prisma } = require('../../db.js');

const putMembership = async (req, res) => {
  try {
    const put = await prisma.membership.update(
      {
        where: {
          idMemb: parseInt(req.params.idMemb)
        },
        data: req.body
      })

    res.json(put)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  putMembership
};