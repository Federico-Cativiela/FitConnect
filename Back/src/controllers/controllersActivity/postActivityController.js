const {prisma} = require('../../db.js')

const postActivityController = async (image,name, schedule, type_activity, rating) => {
    console.log(image);
    const newActivity = await prisma.activity.create({
        data:{
            image: image,
            name: name,
            schedule: schedule,
            type_activity: type_activity,
            rating: rating
        }
    })

    return newActivity;
};

module.exports = {
    postActivityController
}