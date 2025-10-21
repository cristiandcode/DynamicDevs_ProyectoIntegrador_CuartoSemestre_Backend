import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  check("nombreProducto")
    .not()
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre del producto debe tener entre 2 y 50 caracteres"),
  check("precio")
    .notEmpty()
    .withMessage("El precio del producto es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un valor numérico")
    .custom((value) => {
      if (value >= 50 && value <= 20000) {
        return true;
      } else {
        throw new Error("El precio del producto debe estar entre $50 y $20000");
      }
    }),
  //Aquí llamo a  resultadoValidacion
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
