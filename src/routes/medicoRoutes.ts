import express from "express";
import { insertarMedico, listarMedicos, obtenerMedico, modificarMedico, eliminarMedico } from "../controllers/medicoController";

const router = express.Router();

router.post('', insertarMedico);
router.get('', listarMedicos);
router.get('/:id', obtenerMedico);
router.put('/:id', modificarMedico);
router.patch('/:id', eliminarMedico);

export default router;