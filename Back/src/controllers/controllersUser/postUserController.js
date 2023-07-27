const {prisma} = require('../../db.js')

const postUserController = async (uid, name, surname, email, password, rol, userStatus, idMembership) => {
    !password && (password = "aaaaa");
    const fechaActual = new Date();
    const obtenerFechaVencimiento = (fechaActual) => {
        let nuevaFecha = new Date(fechaActual); 
        if (Number(idMembership)<4) {            
            nuevaFecha.setDate(fechaActual.getDate() + 31);
            return nuevaFecha;
        }else{
            nuevaFecha.setDate(fechaActual.getDate() + 365);
            return nuevaFecha;
        }
    }
    const fechaVencimiento = obtenerFechaVencimiento(fechaActual);

    console.log(uid, name, surname, email, password, rol, userStatus, idMembership, fechaActual, fechaVencimiento);
    const newUser = await prisma.user.create({
        data:{
            uid: uid,
            name: name,
            surname: surname,
            email: email,
            password: password,
            entry_date: fechaActual,
            expire_date: fechaVencimiento,
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