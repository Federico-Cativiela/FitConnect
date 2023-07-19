const { prisma } = require("../../db");

const putUserController = async (id, data) => {
  let put;
    if (isNaN(id)) {
      put = await prisma.user.update({
        where: {
          email: data.email,
        },
        data: data,
      });
    }else{
      put = await prisma.user.update({
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
