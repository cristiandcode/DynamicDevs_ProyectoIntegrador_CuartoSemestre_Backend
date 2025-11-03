import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../helpers/validacionProducto.js";
import verificarJWT from "../helpers/verificarJWT.js";

const router = Router();

// Rutas sin duplicar "productos"
router.route("/")
  .get(listarProductos) // GET /api/productos
  .post([verificarJWT, validacionProducto], crearProducto); // POST /api/productos

router.route("/:id")
  .get(obtenerProducto) // GET /api/productos/:id
  .put([verificarJWT, validacionProducto], editarProducto) // PUT /api/productos/:id
  .delete(verificarJWT, borrarProducto); // DELETE /api/productos/:id

export default router;
