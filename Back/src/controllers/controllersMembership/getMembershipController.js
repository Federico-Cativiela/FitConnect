const {prisma} = require ('../../db.js');


const getMembershipController = async (filter) => {
    let memberships;
    if (!filter) {
       memberships = await prisma.membership.findMany({
        include:{
            activities:{
                select:{
                    activityId:true,
                }
            }
        },
        orderBy:{idMembership:'asc'}  
       })
    }else{        
        memberships = await prisma.membership.findMany({
           where: {
               duration: Number(filter)
           },
           include:{
            activities:{
                select:{
                    activityId:true,
                }
            }
        },
        orderBy:{idMembership:'asc'}  
       })
    }

    return  memberships;
};


module.exports = {
    getMembershipController
}

