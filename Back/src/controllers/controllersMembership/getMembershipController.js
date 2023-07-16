const {prisma} = require ('../../db.js');


const getMembershipController = async (filter) => {
    let memberships;
    if (!filter) {
       memberships = await prisma.membership.findMany()
    }else{        
        memberships = await prisma.membership.findMany({
           where: {
               duration: Number(filter)
           },  
       })
    }
    return  memberships;
};


module.exports = {
    getMembershipController
}

