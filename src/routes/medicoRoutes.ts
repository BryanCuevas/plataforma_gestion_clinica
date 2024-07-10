import express from "express";
import { insertarMedico, listarMedicos, obtenerMedico, modificarMedico, eliminarMedico } from "../controllers/medicoController";

const router = express.Router();
/**
 * Post track
 * @swagger
 * /medicos:
 *   post:
 *     tags:
 *       - Médicos
 *     summary: Insertar médico
 *     description: Este endpoint permite insertar un médico
 *     operationId: insertarMedico
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/MedicoInsertar"
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Insertado correctamente"
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: string
 *                   example: null
 *       '400':
 *         description: Petición no válida
 *       '500':
 *         description: Error interno del servidor
*/
router.post('', insertarMedico);

/**
 * Get track
 * @swagger
 * /medicos:
 *   get:
 *     tags:
 *       - Médicos
 *     summary: Listar médicos
 *     operationID: listarMedicos
 *     description: Este endpoint permite listar todos los médicos
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "OK"
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   $ref: '#/components/schemas/Medico'
 *       '500':
 *         description: Error interno del servidor
*/
router.get('', listarMedicos);

/**
 * Get track
 * @swagger
 * /medicos/{id_medico}:
 *   get:
 *     tags:
 *       - Médicos
 *     summary: Buscar médico
 *     description: Este endpoint permite buscar un médico según su ID solo si está activo
 *     operationId: obtenerMedico
 *     parameters:
 *       - name: id_medico
 *         in: path
 *         description: ID del médico a buscar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "OK"
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   $ref: '#/components/schemas/Medico'
 *       '500':
 *         description: Error interno del servidor   
*/
router.get('/:id', obtenerMedico);

/**
 * Put track
 * @swagger
 * /medicos/{id_medico}:
 *   put:
 *     tags:
 *       - Médicos
 *     summary: Modificar médico
 *     description: Este endpoint permite modificar algunos o todos los datos de un médico según su ID
 *     operationId: modificarMedico
 *     parameters:
 *       - name: id_medico
 *         in: path
 *         description: ID del médico a modificar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/MedicoModificar"
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Modificado correctamente"
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: string
 *                   example: null
 *       '400':
 *         description: Petición no válida
 *       '500':
 *         description: Error interno del servidor
*/
router.put('/:id', modificarMedico);

/**
 * Patch track
 * @swagger
 * /medicos/{id_medico}:
 *   patch:
 *     tags:
 *       - Médicos
 *     summary: Eliminar médico
 *     description: Este endpoint permite eliminar lógicamente un médico según su ID
 *     operationId: eliminarMedico
 *     parameters:
 *       - name: id_medico
 *         in: path
 *         description: ID del médico a eliminar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Eliminado correctamente"
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: string
 *                   example: null
 *       '500':
 *         description: Error interno del servidor
*/
router.patch('/:id', eliminarMedico);

export default router;