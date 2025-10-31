import { MercadoPagoConfig, Preference } from "mercadopago";

// ⚠️ QUITA esto - ya se carga en index.js
// import dotenv from 'dotenv';
// dotenv.config();

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
          success: "http://localhost:5173/success",
          failure: "http://localhost:5173/failure",
          pending: "http://localhost:5173/pending",
        },
        payment_methods: {
          excluded_payment_types: [],
          installments: 12,
        },
      },
    });

    console.log("✅ Preferencia creada exitosamente. ID:", response.id);
    
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