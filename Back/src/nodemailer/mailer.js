// index.js
const nodemailer = require('nodemailer');

// Configurar transporte para enviar correos electrónicos
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    PORT:465,
    secure:true,
    auth: {
    user: "infofitconnect@gmail.com", // Reemplaza con tu dirección de correo electrónico
    pass: "zkbujsmrcwqtqpwi", // Reemplaza con tu contraseña de Gmail
  },
});



module.exports=transporter;
