const { postUserController } = require("../../controllers/controllersUser/postUserController");

const postUser = async (paymentInfo) => {

        const uid = paymentInfo.client_reference_id
        const email = paymentInfo.customer_email
        const rol = false;
        const userStatus = true;
        const { name, surname, password, idMembership} = paymentInfo.metadata;
        const newUser = await postUserController(uid, name, surname, email, password, rol, userStatus, idMembership)
        return newUser;   

};

module.exports = {
  postUser
}