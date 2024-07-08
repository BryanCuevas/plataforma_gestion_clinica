import express from "express";
import { insertarSede, listarSedes, obtenerSede, modificarSede, eliminarSede } from "../controllers/sedeController";

const router = express.Router();

/**
 * Post track
 * @swagger
 * /sedes:
 *   post:
 *     tags:
 *       - Sedes
 *     summary: Insertar sede
 *     description: Este endpoint permite insertar una sede
 *     operationId: insertarSede
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Sede"
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Sede"
 *       '400':
 *         description: Petición no válida
 *       '500':
 *         description: Error interno del servidor
*/
router.post('', insertarSede);

/**
 * Get track
 * @swagger
 * /sedes:
 *   get:
 *     tags:
 *       - Sedes
 *     summary: Listar sedes
 *     operationID: listarSedes
 *     description: Este endpoint permite listar a todas las sedes
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Sede"
 *       '500':
 *         description: Error interno del servidor
*/
router.get('', listarSedes);

/**
 * Get track
 * @swagger
 * /sedes/{id_sede}:
 *   get:
 *     tags:
 *       - Sedes
 *     summary: Buscar sede
 *     description: Este endpoint permite buscar a una sede si está activa según su ID
 *     operationId: obtenerSede
 *     parameters:
 *       - name: id_sede
 *         in: path
 *         description: ID de la sede a buscar
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
 *               $ref: "#/components/schemas/Sede"
 *       '500':
 *         description: Error interno del servidor   
*/
router.get('/:id', obtenerSede);

/**
 * Put track
 * @swagger
 * /sedes/{id_sede}:
 *   put:
 *     tags:
 *       - Sedes
 *     summary: Modificar sede
 *     description: Este endpoint permite modificar algunos o todos los datos de una sede según su ID
 *     operationId: modificarSede
 *     parameters:
 *       - name: id_sede
 *         in: path
 *         description: ID de la sede a modificar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Sede"

 *     responses:
 *       '200':
 *         description: Operación exitosa
 *       '400':
 *         description: Petición no válida
 *       '500':
 *         description: Error interno del servidor
*/
router.put('/:id', modificarSede);

/**
 * Patch track
 * @swagger
 * /sedes/{id_sede}:
 *   patch:
 *     tags:
 *       - Sedes
 *     summary: Eliminar sede
 *     description: Este endpoint permite eliminar lógicamente una sede según su ID
 *     operationId: eliminarSede
 *     parameters:
 *       - name: id_sede
 *         in: path
 *         description: ID de la sede a eliminar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *       '500':
 *         description: Error interno del servidor
*/
router.patch('/:id', eliminarSede);

export default router;