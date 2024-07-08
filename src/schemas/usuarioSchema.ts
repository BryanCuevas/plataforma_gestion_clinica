import Joi from "joi";

const usuarioBaseSchema = {
    nombre : Joi.string()
        .regex(/^[a-zA-Z0-9\s]*$/) //Solo letras y espacios
        .min(3)
        .max(100),
    clave: Joi.string()
        .min(10)
        .max(10),
    rol: Joi.string()
        .min(3)
        .max(3),
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