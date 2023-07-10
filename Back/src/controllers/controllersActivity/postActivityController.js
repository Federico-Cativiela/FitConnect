const {prisma} = require('../../db.js')

const postActivityController = async (name, schedule, type_activity, rating) => {
    
    const newActivity = await prisma.activity.create({
        data:{
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