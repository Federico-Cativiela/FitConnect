const { prisma } = require('../../db.js');

const deleteMembership = async (req, res) => {
  try {
    const deleted = await prisma.membership.delete(
      {
        where: {
          idMembership: parseInt(req.params.idMembership)
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