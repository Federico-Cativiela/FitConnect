const {prisma} = require('../../db.js')

const postActivityController = async (name, surname, email, password, entry_date, expire_date, rol, userStatus, membershipId) => {
    
    const newActivity = await prisma.activity.create({
        data:{
            name: name,
            surname: surname,
            email: email,
            password: password,
            entry_date: entry_date,
            expire_date: expire_date,
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