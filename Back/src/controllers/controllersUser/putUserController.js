const { prisma } = require("../../db");

const putUserController = async (id, data) => {
  let userFound;
    if (isNaN(id)) {
      const put = await prisma.user.update({
        where: {
          uid: id,
        },
        data: data,
      });
    }else{
      const put = await prisma.user.update({
        where: {
          id: Number(id)
        },
        data: data,
      });
    }

  return put;
};

module.exports = {
  putUserController,
};
