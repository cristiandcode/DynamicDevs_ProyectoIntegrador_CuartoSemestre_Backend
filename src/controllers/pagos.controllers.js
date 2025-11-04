import { MercadoPagoConfig, Preference } from "mercadopago";
import Pedido from '../database/models/pedidos.js';
import { enviarMail } from '../helpers/enviarMail.js'; 

// Configurar cliente de Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export const createPreference = async (req, res) => {
  try {
    console.log('🎯 Creando preferencia con token:', process.env.MP_ACCESS_TOKEN ? '✅ Cargado' : '❌ Error');
    
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "El carrito está vacío o es inválido" });
    }

    const preference = new Preference(client);
    
    const response = await preference.create({
      body: {
        items: items.map((item) => ({
          title: item.nombreProducto || item.title,
          quantity: item.cantidad || item.quantity || 1,
          unit_price: Number(item.precio || item.unit_price),
          currency_id: "ARS",
        })),
                back_urls: {
            success: "https://chocodevs.netlify.app/success",
            failure: "https://chocodevs.netlify.app/failure",
            pending: "https://chocodevs.netlify.app/pending",
          },
        payment_methods: {
          excluded_payment_types: [],
          installments: 12,
        },
      },
    });

    console.log("✅ Preferencia creada exitosamente. ID:", response.id);

    // ✅ Enviar mail con detalle de productos
    try {
      await enviarMail({
        subject: 'Nueva compra con Mercado Pago',
        items,
        metodoPago: 'MP'
      });
    } catch (err) {
      console.error('❌ Error enviando mail de Mercado Pago:', err.message);
    }

    res.status(200).json({
      preferenceId: response.id,
      init_point: response.init_point,
    });
  } catch (error) {
    console.error("❌ Error creando preferencia:", error);
    res.status(500).json({ 
      error: "Error creando la preferencia de pago",
      details: error.message 
    });
  }
};

export const registrarPedidoEfectivo = async (req, res) => {
  try {
    const { items, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ 
        mensaje: 'Debe enviar al menos un producto' 
      });
    }

    const nuevoPedido = new Pedido({
      usuario: null,
      productos: items.map(item => item._id),
      total: total,
      metodoPago: 'EFECTIVO',
      estado: 'PENDIENTE_RETIRO'
    });

    await nuevoPedido.save();

    console.log('✅ Pedido en efectivo registrado:', nuevoPedido._id);

    // ✅ Enviar mail con detalle de productos
    try {
      await enviarMail({
        subject: 'Nuevo pedido para retirar en local',
        items,
        metodoPago: 'EFECTIVO'
      });
    } catch (err) {
      console.error('❌ Error enviando mail de pedido en efectivo:', err.message);
    }

    res.status(201).json({
      mensaje: 'Pedido registrado exitosamente',
      orderId: nuevoPedido._id,
      metodoPago: 'EFECTIVO'
    });

  } catch (error) {
    console.error('❌ Error al registrar pedido en efectivo:', error);
    res.status(500).json({ 
      mensaje: 'Error al registrar el pedido',
      error: error.message 
    });
  }
};
