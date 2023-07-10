const {prisma} = require('../../db.js')

const postUserController = async (name, surname, email, password, rol, userStatus, membershipId) => {
    
    const newUser = await prisma.user.create({
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

    return newUser;
};

module.exports = {
    postUserController
}