const { default: Stripe } = require('stripe');

const stripe = new Stripe("sk_test_51NVc5JFVLHg8mbgAT7j3cU78uPv2ivnKUf30qOTMdS65zMcIOw1i24TGZq3NEq9Iz7cAw8J28mIi8I1d6Iu65a8s00Bl8unN39")


const getSucces = async (req, res) => {
    try {
        console.log("entramos, todo ok");
      // Aquí procesas la notificación de Stripe y obtienes el objeto "charge"
      const event = req.body;
      // Verificar la firma del evento si es necesario para mayor seguridad
  
      // Si el evento es de tipo 'checkout.session.completed', debería haber un objeto "charge" dentro de "event.data.object"
      if (event.type === 'checkout.session.success') {
        const charge = event.data.object;
        console.log('Información del pago:', charge);
        // Aquí puedes acceder a los datos relevantes del pago y realizar las acciones que necesites
      }
      // Respondes con un 200 OK para confirmar a Stripe que has recibido la notificación
      res.status(200).json({charge});
    } catch (error) {
        console.log("rompimo");

      // Manejo de errores si es necesario
      res.status(400).json({ error: 'Hubo un error al procesar la notificación' });
    }
  }

  module.exports = {
    getSucces
}