const {prisma} = require ('../../db.js');

const getUserId = async (req, res) => {
  try {
    const userFound = await prisma.user.findFirst({
    where: {
      idUser: parseInt(req.params.id)
    }
  })

  res.json(userFound);

  } catch (error) {
    console.log(error)
  }
}

module.exports = {getUserId};