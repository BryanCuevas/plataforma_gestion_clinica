import express from "express";
import { insertarEspecialidad, listarEspecialidades, obtenerEspecialidad, modificarEspecialidad, eliminarEspecialidad } 
from "../controllers/especialidadController";

const router = express.Router();

/**
 * Post track
 * @swagger
 * /especialidades:
 *   post:
 *     tags:
 *       - Especialidades
 *     summary: Insertar especialidad
 *     description: Este endpoint permite insertar una especialidad
 *     operationId: insertarEspecialidad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/EspecialidadInsertar"
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
router.post('', insertarEspecialidad);

/**
 * Get track
 * @swagger
 * /especialidades:
 *   get:
 *     tags:
 *       - Especialidades
 *     summary: Listar especialidades
 *     operationID: listarEspecialidades
 *     description: Este endpoint permite listar todas las especialidades
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
 *                   $ref: '#/components/schemas/Especialidad'
 *       '500':
 *         description: Error interno del servidor
*/
router.get('', listarEspecialidades);

/**
 * Get track
 * @swagger
 * /especialidades/{id_especialidad}:
 *   get:
 *     tags:
 *       - Especialidades
 *     summary: Buscar especialidad
 *     description: Este endpoint permite buscar una especialidad según su ID solo si está activa
 *     operationId: obtenerEspecialidad
 *     parameters:
 *       - name: id_especialidad
 *         in: path
 *         description: ID de la especialidad a buscar
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
 *                   $ref: '#/components/schemas/Especialidad'
 *       '500':
 *         description: Error interno del servidor   
*/
router.get('/:id', obtenerEspecialidad);

/**
 * Put track
 * @swagger
 * /especialidades/{id_especialidad}:
 *   put:
 *     tags:
 *       - Especialidades
 *     summary: Modificar especialidad
 *     description: Este endpoint permite modificar algunos o todos los datos de una especialidad según su ID
 *     operationId: modificarEspecialidad
 *     parameters:
 *       - name: id_especialidad
 *         in: path
 *         description: ID del especialidad a modificar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/EspecialidadModificar"
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
router.put('/:id', modificarEspecialidad);

/**
 * Patch track
 * @swagger
 * /especialidades/{id_especialidad}:
 *   patch:
 *     tags:
 *       - Especialidades
 *     summary: Eliminar especialidad
 *     description: Este endpoint permite eliminar lógicamente una especialidad según su ID
 *     operationId: eliminarEspecialidad
 *     parameters:
 *       - name: id_especialidad
 *         in: path
 *         description: ID de la especialidad a eliminar
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
router.patch('/:id', eliminarEspecialidad);

export default router;