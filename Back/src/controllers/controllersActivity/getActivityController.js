const {prisma} = require ('../../db.js');


const getActivityController = async (filter, order) => {
    let activities;
    //si tengo algun filtro findMany-Filter
    if (filter>0) {
        activities = await prisma.activity.findMany({
            where: {
                memberships:{
                    some:{
                        membershipId: Number(filter)
                    }
                }
            },
            })
    }else{
        //si no tengo filtro findMany
        activities = await prisma.activity.findMany()
    }

    //Si tengo order decendente, si no ascendente por defecto
    if (order==="za") {
        activities = activities.sort((a, b) => b.name.localeCompare(a.name));
    }else{
        activities = activities.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return  activities;
};


module.exports = {
    getActivityController
}