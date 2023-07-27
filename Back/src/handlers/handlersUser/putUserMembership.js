const { putUserController } = require("../../controllers/controllersUser/putUserController");

const putUserMembership = async (paymentInfo) => {
    
    const id = paymentInfo.client_reference_id
    const email = paymentInfo.customer_email
    const idMembership = Number(paymentInfo.metadata.idMembership) 
    const fechaActual = new Date();
    const obtenerFechaVencimiento = (fechaActual) => {
        let nuevaFecha = new Date(fechaActual); 
        if (idMembership<4) {            
            nuevaFecha.setDate(fechaActual.getDate() + 31);
            return nuevaFecha;
        }else{
            nuevaFecha.setDate(fechaActual.getDate() + 365);
            return nuevaFecha;
        }
    }
    const fechaVencimiento = obtenerFechaVencimiento(fechaActual);

    const data = {
        email:email,
        membershipId:idMembership,
        entry_date: fechaActual,
        expire_date: fechaVencimiento,
        userStatus: true
    }

    const put = await putUserController(id, data)
    
    return put    
};


module.exports = {
    putUserMembership
}