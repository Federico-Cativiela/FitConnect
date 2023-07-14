const {prisma} = require ('../../db.js');

const getMembershipId = async (req, res) => {
  try {
    const membershipFound = await prisma.membership.findFirst({
    where: {
      idMembership: parseInt(req.params.idMembership)
    }
  })

  res.json(membershipFound);

  } catch (error) {
    console.log(error)
  }
}

module.exports = {getMembershipId};