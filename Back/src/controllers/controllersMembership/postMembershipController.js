const {prisma} = require('../../db.js')

const postMembershipController = async (levelMembership,price,duration ,user,paystore ) => {
    
    const newMembership = await prisma.membership.create({
        data:{
            levelMembership: levelMembership,
            price: price,
            duration: duration,
            user: user,
            paystore: paystore,
        }
    })
    return newMembership;
};

module.exports = {
    postMembershipController
}
