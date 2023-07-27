const transporter = require ("../../nodemailer/mailer")
const nodemailer = require("nodemailer")

const postMailerSucces = async function(newPayment,paymentInfo){
   const invoiceEmail = newPayment.invoice
    const email = await transporter.sendMail({
        from: "infofitconnect@gmail.com",
        to:paymentInfo.customer_email,
        subject:"Tu pago fue recibido exitosamente ,atentamente FitConnect",
        html:`
        <b>Gracias por confiar en nosotros disfruta tu suscripcion!:</b>
        <a href="${invoiceEmail}">Consulta tu comprobante aqui!!</a>`
        
        
        
    })
    return email
    
}


module.exports = postMailerSucces