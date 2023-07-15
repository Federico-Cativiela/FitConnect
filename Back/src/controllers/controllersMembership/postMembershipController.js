const {prisma} = require('../../db.js')

const postMembershipController = async (levelMembership,price,duration  ) => {
    
    const newMembership = await prisma.membership.create({
        data:{
            levelMembership: levelMembership,
            price: price,
            duration: duration,
        }
    })
    return newMembership;
};

module.exports = {
    postMembershipController
}
