const { prisma } = require('../../db.js');

const deleteMembership = async (req, res) => {
  try {
    const deleted = await prisma.membership.delete(
      {
        where: {
          idMemb: parseInt(req.params.idMemb)
        }
      }
    )

    res.json(deleted)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteMembership
};