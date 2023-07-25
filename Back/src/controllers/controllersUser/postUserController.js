const {prisma} = require('../../db.js')

const postUserController = async (uid, name, surname, email, password, rol, userStatus, idMembership) => {
    !password && (password = "aaaaa"); 
    console.log(uid, name, surname, email, password, rol, userStatus, idMembership);
    const newUser = await prisma.user.create({
        data:{
            uid: uid,
            name: name,
            surname: surname,
            email: email,
            password: password,
            rol: rol,
            userStatus: userStatus,
            membershipId: Number(idMembership)
        }
    })

    return newUser;
};

module.exports = {
    postUserController
}