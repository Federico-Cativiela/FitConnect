const { prisma } = require("../../db");

const deleteUserController = async (id) => {
    
    const deleted = await prisma.user.delete({
        where: {
          id: id
        },
      })
      
      return deleted;
};

module.exports = {
    deleteUserController
}