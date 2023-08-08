const { prisma } = require("../../db.js");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
};
