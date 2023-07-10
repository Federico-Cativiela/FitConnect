const {prisma} = require('../../db.js')

const postActivityController = async (name, surname, email, password, rol, userStatus, membershipId) => {
    
    const newActivity = await prisma.activity.create({
        data:{
            name: name,
            surname: surname,
            email: email,
            password: password,
            rol: rol,
            userStatus: userStatus,
            membershipId: membershipId
        }
    })

    return newActivity;
};

module.exports = {
    postActivityController
}