import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuario',
    default: null
  },
  productos: [{
    type: Schema.Types.ObjectId,
    ref: 'producto',
    required: true
  }],
  total: {
    type: Number,
    required: true,
    min: 0
  },
  metodoPago: {
    type: String,
    required: true,
    enum: ['MERCADOPAGO', 'EFECTIVO']
  },
  estado: {
    type: String,
    required: true,
    enum: ['PENDIENTE_RETIRO', 'COMPLETADO', 'CANCELADO'],
    default: 'PENDIENTE_RETIRO'
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

const Pedido = mongoose.model('pedido', pedidoSchema);
export default Pedido;