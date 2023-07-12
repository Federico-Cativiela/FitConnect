const { prisma } = require("../../db");

const putUserController = async (id) => {
    
    const deleted = await prisma.user.delete({
        where: {
          idUser: Number(id)
        },
        data: req.body,
      })

      return deleted;
};

module.exports = {
    deleteUserController
}