import express from "express";
import { insertarCita, listarCitas, obtenerCita, modificarCita, eliminarCita } from "../controllers/citaController";

const router = express.Router();

router.post('', insertarCita);
router.get('', listarCitas);
router.get('/:id', obtenerCita);
router.put('/:id', modificarCita);
router.patch('/:id', eliminarCita);

export default router;