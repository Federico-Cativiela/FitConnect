const {prisma} = require ('../../db.js');


const getActivityController = async () => {
    const activities = await prisma.extraActivity.findMany()
    return  activities;
};


module.exports = {
    getActivityController
}