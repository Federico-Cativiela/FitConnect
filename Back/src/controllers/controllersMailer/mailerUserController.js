const transporter = require ("../../nodemailer/mailer")
const nodemailer = require("nodemailer")

const postMailerSucces = function(newPayment,paymentInfo){
    transporter.sendMail({
        from: "infofitconnect@gmail.com",
        to:paymentInfo.email,
        subject:"Tu pago fue recibido exitosamente ,atentamente FitConnect",
        body:newPayment.invoice
    })

    
}


module.exports = postMailerSucces