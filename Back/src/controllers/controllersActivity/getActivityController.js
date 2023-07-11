const {prisma} = require ('../../db.js');


const getActivityController = async () => {
    const activities = await prisma.activity.findMany()
    return  activities;
};


module.exports = {
    getActivityController
}