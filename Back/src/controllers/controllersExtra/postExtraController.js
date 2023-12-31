const { prisma } = require("../../db.js");

const postExtra = async (req, res) => {
  try {

    const { image,name, schedule, type_activity, rating, description,price } = req.body;



    const newExtra = await prisma.extraActivity.create({
      data: {
        image: image,
        name: name,
        schedule: schedule,
        type_activity: type_activity,
        rating: rating,
        description: description,
        price: Number(price),
      },
    });

    res.json(newExtra);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postExtra,
};
