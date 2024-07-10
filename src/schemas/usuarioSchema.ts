import Joi from "joi";

const usuarioBaseSchema = {
    nombre : Joi.string()
        .pattern(/^[a-zA-Z0-9]+$/) //Solo letras y números
        .min(3)
        .max(30),
    clave: Joi.string()
        .pattern(/^[a-zA-Z0-9.,\-_?¿¡!]{10}$/), //Solo letras, números y algunos caracteres especiales
    rol: Joi.string()
        .valid('PAC', 'ADM', 'MED')
};

export const insertarUsuarioSchema = Joi.object({
    ...usuarioBaseSchema,
    nombre: usuarioBaseSchema.nombre.required(),
    clave: usuarioBaseSchema.clave.required(),
    rol: usuarioBaseSchema.rol.required()
});

export const modificarUsuarioSchema = Joi.object({
    ...usuarioBaseSchema
});