const {prisma} = require ('../../db.js');


const getActivityController = async (filter, order) => {
    let activities;
    //si tengo algun filtro findMany-Filter.
    if (filter>0) {
        if (order==="za") {
            activities = await prisma.activity.findMany({
                where: {
                    memberships:{
                        some:{
                            membershipId: Number(filter)
                        }
                    }
                },
                orderBy : { name:"desc"}
            })
        }else{
            activities = await prisma.activity.findMany({
                where: {
                    memberships:{
                        some:{
                            membershipId: Number(filter)
                        }
                    }
                },
                orderBy : { name:"asc"}
            })
        }
    }else{
        if (order==="za") {
            activities = await prisma.activity.findMany({
                orderBy : { name:"desc"}
            })
        }else{
            activities = await prisma.activity.findMany({
                orderBy : { name:"asc"}
            })
        }
    }

    return  activities;
};


module.exports = {
    getActivityController
}