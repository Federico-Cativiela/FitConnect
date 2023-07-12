const {prisma} = require ('../../db.js');


const getMembershipController = async () => {
    const memberships = await prisma.membership.findMany()
    return  memberships;
};


module.exports = {
    getMembershipController
}

