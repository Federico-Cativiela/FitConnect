const {prisma} = require ('../../db.js');

const getUserId = async (req, res) => {
  const {id} = req.params
  try {
    let userFound;
    if (isNaN(id)) {     
      console.log("estoy en el if",id);
   
      userFound = await prisma.user.findFirst({
        where: {
          uid: id
        }
      })
    }else{ 
      userFound = await prisma.user.findFirst({
        where: {
          id: parseInt(req.params.id)
        }
      })
    }
    res.json(userFound);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {getUserId};