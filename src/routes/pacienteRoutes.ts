import express from "express";
import { insertarPaciente, listarPacientes, obtenerPaciente, modificarPaciente, eliminarPaciente } from "../controllers/pacienteController";

const router = express.Router();

/**
 * Post track
 * @swagger
 * /pacientes:
 *   post:
 *     tags:
 *       - Pacientes
 *     summary: Insertar paciente
 *     description: Este endpoint permite insertar un paciente
 *     operationId: insertarPaciente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Paciente"
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Paciente"
 *       '400':
 *         description: Petición no válida
 *       '500':
 *         description: Error interno del servidor
*/
router.post('', insertarPaciente);

/**
 * Get track
 * @swagger
 * /pacientes:
 *   get:
 *     tags:
 *       - Pacientes
 *     summary: Listar pacientes
 *     operationID: listarPacientes
 *     description: Este endpoint permite listar a todos los pacientes
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Paciente"
 *       '500':
 *         description: Error interno del servidor
*/
router.get('', listarPacientes);

/**
 * Get track
 * @swagger
 * /pacientes/{id_paciente}:
 *   get:
 *     tags:
 *       - Pacientes
 *     summary: Buscar paciente
 *     description: Este endpoint permite buscar a un paciente si está activo según su ID
 *     operationId: obtenerPaciente
 *     parameters:
 *       - name: id_paciente
 *         in: path
 *         description: ID del paciente a buscar
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
 *               $ref: "#/components/schemas/Paciente"
 *       '500':
 *         description: Error interno del servidor   
*/
router.get('/:id', obtenerPaciente);

/**
 * Put track
 * @swagger
 * /pacientes/{id_paciente}:
 *   put:
 *     tags:
 *       - Pacientes
 *     summary: Modificar paciente
 *     description: Este endpoint permite modificar algunos o todos los datos de un paciente según su ID
 *     operationId: modificarPaciente
 *     parameters:
 *       - name: id_paciente
 *         in: path
 *         description: ID del paciente a modificar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Paciente"

 *     responses:
 *       '200':
 *         description: Operación exitosa
 *       '400':
 *         description: Petición no válida
 *       '500':
 *         description: Error interno del servidor
*/
router.put('/:id', modificarPaciente);

/**
 * Patch track
 * @swagger
 * /pacientes/{id_paciente}:
 *   patch:
 *     tags:
 *       - Pacientes
 *     summary: Eliminar paciente
 *     description: Este endpoint permite eliminar lógicamente un paciente según su ID
 *     operationId: eliminarPaciente
 *     parameters:
 *       - name: id_paciente
 *         in: path
 *         description: ID del paciente a eliminar
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
router.patch('/:id', eliminarPaciente);

export default router;