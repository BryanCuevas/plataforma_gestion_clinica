import express from "express";
import { insertarCita, listarCitas, obtenerCita, modificarCita, eliminarCita } from "../controllers/citaController";

const router = express.Router();

/**
 * Post track
 * @swagger
 * /citas:
 *   post:
 *     tags:
 *       - Citas médicas
 *     summary: Insertar cita
 *     description: Este endpoint permite insertar una cita médica
 *     operationId: insertarCita
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CitaMedicaInsertar"
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
router.post('', insertarCita);

/**
 * Get track
 * @swagger
 * /citas:
 *   get:
 *     tags:
 *       - Citas médicas
 *     summary: Listar citas
 *     operationID: listarCitas
 *     description: Este endpoint permite listar todas las citas médicas
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
 *                   $ref: '#/components/schemas/CitaMedica'
 *       '500':
 *         description: Error interno del servidor
*/
router.get('', listarCitas);

/**
 * Get track
 * @swagger
 * /citas/{id_cita}:
 *   get:
 *     tags:
 *       - Citas médicas
 *     summary: Buscar cita
 *     description: Este endpoint permite buscar una cita según su ID solo si está activa
 *     operationId: obtenerCita
 *     parameters:
 *       - name: id_cita
 *         in: path
 *         description: ID de la cita a buscar
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
 *                   $ref: '#/components/schemas/CitaMedica'
 *       '500':
 *         description: Error interno del servidor   
*/
router.get('/:id', obtenerCita);

/**
 * Put track
 * @swagger
 * /citas/{id_cita}:
 *   put:
 *     tags:
 *       - Citas médicas
 *     summary: Modificar cita
 *     description: Este endpoint permite modificar algunos o todos los datos de una cita médica según su ID
 *     operationId: modificarCita
 *     parameters:
 *       - name: id_cita
 *         in: path
 *         description: ID de la cita a modificar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CitaMedicaModificar"
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
router.put('/:id', modificarCita);

/**
 * Patch track
 * @swagger
 * /citas/{id_cita}:
 *   patch:
 *     tags:
 *       - Citas médicas
 *     summary: Eliminar cita 
 *     description: Este endpoint permite eliminar lógicamente una cita médica según su ID
 *     operationId: eliminarCita
 *     parameters:
 *       - name: id_cita
 *         in: path
 *         description: ID de la cita a eliminar
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
router.patch('/:id', eliminarCita);

export default router;