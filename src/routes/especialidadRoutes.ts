import express from "express";
import { insertarEspecialidad, listarEspecialidades, obtenerEspecialidad, modificarEspecialidad, eliminarEspecialidad } 
from "../controllers/especialidadController";

const router = express.Router();

router.post('', insertarEspecialidad);
router.get('', listarEspecialidades);
router.get('/:id', obtenerEspecialidad);
router.put('/:id', modificarEspecialidad);
router.patch('/:id', eliminarEspecialidad);

export default router;