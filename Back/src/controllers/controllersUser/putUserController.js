const { prisma } = require("../../db");

const putUserController = async (id, data) => {
    
    const put = await prisma.user.update({
        where: {
          id: id
        },
        data: data
      })

      return put;
};

module.exports = {
    putUserController
}