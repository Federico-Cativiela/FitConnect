// index.js
const nodemailer = require('nodemailer');

// Configurar transporte para enviar correos electrónicos
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    url:"https://fitconnect-r5gr.onrender.com/",
    service: 'gmail',
    auth: {
    user: "infofitconnect@gmail.com", // Reemplaza con tu dirección de correo electrónico
    pass: "fitconnect", // Reemplaza con tu contraseña de Gmail
  },
});



module.exports=transporter;
