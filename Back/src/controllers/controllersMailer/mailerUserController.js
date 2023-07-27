const transporter = require ("../../nodemailer/mailer")
const nodemailer = require("nodemailer")

const postMailerSucces = async function(newPayment,paymentInfo){
    const email = await transporter.sendMail({
        from: "infofitconnect@gmail.com",
        to:paymentInfo.customer_email,
        subject:"Tu pago fue recibido exitosamente ,atentamente FitConnect",
        body:newPayment.invoice
    })
    return email
    
}


module.exports = postMailerSucces