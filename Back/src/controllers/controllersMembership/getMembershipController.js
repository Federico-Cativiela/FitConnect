const {prisma} = require ('../../db.js');


const getMembershipController = async (filter) => {
    const memberships = await prisma.membership.findMany({
        where: {
            duration: Number(filter)
        },  
    })
    return  memberships;
};


module.exports = {
    getMembershipController
}

