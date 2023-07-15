const {prisma} = require ('../../db.js');


const getActivityController = async (filter, order) => {
    let activities;
    //si tengo algun filtro findMany-Filter.
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
        //si no tengo filtro findMany.
        activities = await prisma.activity.findMany()
    }

    //Si tengo order decendente, si no ascendente por defecto.
    if (order==="za") {
        activities = activities.sort((a, b) => b.name.localeCompare(a.name));
    }else{
        activities = activities.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    //Agregar arreglo con las membresias asociadas a las actividades.
    for (let i=0 ;i<activities.length;i++){
        let levelMembershipsArr= [];
    //peticion de membresias relacionadas por cada actividad (usando idAct)
    let memb= await prisma.membership.findMany({
            where: {
                activities:{
                    some:{
                        activityId: activities[i].idAct
                    }
                }
            },
        })
        //meter el levelMembership en el arreglo levelMembershipsArr
        for (let j=0;j < memb.length;j++) {
            levelMembershipsArr.push(memb[j].levelMembership)
        }
        const memberships = [...new Set(levelMembershipsArr)]
        activities[i].levelsMemberships = memberships;
    }

    return  activities;
};


module.exports = {
    getActivityController
}