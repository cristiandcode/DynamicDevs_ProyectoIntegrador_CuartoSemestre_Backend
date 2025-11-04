import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Genera detalle de productos
const generarDetalleProductos = (items) => {
  if (!items || items.length === 0) return "No hay productos.";
  return items
    .map(i => `${i.nombreProducto} x${i.cantidad} = $${i.precio * i.cantidad}`)
    .join("\n");
};

/**
 * Función para enviar mails
 * @param {Object} options
 * @param {string} options.subject - Asunto
 * @param {Array} [options.items] - Array de productos
 * @param {string} [options.metodoPago] - 'EFECTIVO' o 'MP'
 * @param {string} [options.text] - Texto adicional opcional
 * @param {string} [options.html] - HTML opcional
 */
export const enviarMail = async ({ subject, items, metodoPago, text, html }) => {
  try {
    let cuerpo = "";

    // Mensaje según método de pago
    if (metodoPago === "EFECTIVO") {
      cuerpo += "Paga en el local con efectivo.\n\n";
    } else if (metodoPago === "MP") {
      cuerpo += "Pedido PAGADO ✅\n\n";
    }

    // Agregar detalle de productos si hay items
    if (items) {
      const detalle = generarDetalleProductos(items);
      cuerpo += `Productos:\n${detalle}\n`;
      const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
      cuerpo = `Total: $${total}\n\n${cuerpo}`;
    }

    // Agregar texto adicional si se pasó
    if (text) {
      cuerpo += `\n${text}`;
    }

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: subject || "Nuevo Pedido",
      text: cuerpo,
      html: html || undefined,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Mail enviado:", info.response);
  } catch (error) {
    console.error("❌ Error al enviar mail:", error);
  }
};

