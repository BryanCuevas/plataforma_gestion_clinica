import express from "express";
import { insertarUsuario, listarUsuarios, obtenerUsuario, modificarUsuario, eliminarUsuario } from "../controllers/usuarioController";

const router = express.Router();

/**
 * Post track
 * @swagger
 * /usuarios:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Insertar usuario
 *     description: Este endpoint permite insertar un usuario
 *     operationId: insertarUsuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UsuarioInsertar"
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
router.post('', insertarUsuario);

/**
 * Get track
 * @swagger
 * /usuarios:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Listar usuarios
 *     operationID: listarUsuarios
 *     description: Este endpoint permite listar a todos los usuarios activos
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
 *                   $ref: '#/components/schemas/Usuario'
 *       '500':
 *         description: Error interno del servidor
*/
router.get('', listarUsuarios);

/**
 * Get track
 * @swagger
 * /usuarios/{id_usuario}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Buscar usuario
 *     description: Este endpoint permite buscar a un usuario si está activo según su ID
 *     operationId: obtenerUsuario
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: ID del usuario a buscar
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
 *                   $ref: '#/components/schemas/Usuario'
 *       '500':
 *         description: Error interno del servidor   
*/
router.get('/:id', obtenerUsuario);

/**
 * Put track
 * @swagger
 * /usuarios/{id_usuario}:
 *   put:
 *     tags:
 *       - Usuarios
 *     summary: Modificar usuario
 *     description: Este endpoint permite modificar algunos o todos los datos de un usuario según su ID
 *     operationId: modificarUsuario
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: ID del usuario a modificar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UsuarioModificar"
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
router.put('/:id', modificarUsuario);

/**
 * Patch track
 * @swagger
 * /usuarios/{id_usuario}:
 *   patch:
 *     tags:
 *       - Usuarios
 *     summary: Eliminar usuario
 *     description: Este endpoint permite eliminar lógicamente un usuario según su ID
 *     operationId: eliminarUsuario
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: ID del usuario a eliminar
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
router.patch('/:id', eliminarUsuario);

export default router;