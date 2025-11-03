
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

// Crear el transportador de mails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER, // tu gmail
    pass: process.env.MAIL_PASS, // contraseña de aplicación
  },
});

// Función para enviar mails
export const enviarMail = async ({ subject, text, html }) => {
  try {
    const mailOptions = {
      from: process.env.MAIL_USER, // remitente
      to: process.env.MAIL_TO,     // destinatario
      subject: subject || "Nuevo Pedido",
      text: text || "",            // mensaje en texto plano
      html: html || undefined,     // opcional: mensaje en HTML
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Mail enviado:", info.response);
  } catch (error) {
    console.error("❌ Error al enviar mail:", error);
  }
};
