const { prisma } = require("../../db");

const deleteUserController = async (id) => {
    if (isNaN(id)) {
      const deleted = await prisma.user.delete({
        where: {
          uid: id
        },
      })     
    }else{
      const deleted = await prisma.user.delete({
          where: {
            id: id
          },
      })
    }
      return deleted;
};

module.exports = {
    deleteUserController
}