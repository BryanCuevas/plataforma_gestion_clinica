import Joi from "joi";

const medicoBaseSchema = {
    id_usuario : Joi.number()
        .integer()
        .positive(),
    nombres: Joi.string()
        .pattern(/^[a-zA-Z\s]+$/) //Solo letras y espacios
        .min(2)
        .max(50),
    apellido_paterno: Joi.string()
        .pattern(/^[a-zA-Z]+$/) //Solo letras
        .min(2)
        .max(20),
    apellido_materno: Joi.string()
        .pattern(/^[a-zA-Z]+$/) //Solo letras
        .min(2)
        .max(20),       
    correo: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
        .max(100),
    telefono: Joi.string()
        .pattern(/^[0-9]{9}$/),  // Solo permite 9 dígitos
    direccion: Joi.string()
        .pattern(/^[a-zA-Z0-9\s.,#\-°]+$/) //Solo letras, números, espacios y caracteres asociados a direcciones
        .min(10)
        .max(150),
    documento_identidad: Joi.string()
        .pattern(/^[0-9]{8}$/)  // Solo permite 8 dígitos  
};

export const insertarMedicoSchema = Joi.object({
    ...medicoBaseSchema,
    id_usuario: medicoBaseSchema.id_usuario.required(),
    nombres: medicoBaseSchema.nombres.required(),
    apellido_paterno: medicoBaseSchema.apellido_paterno.required(),
    apellido_materno: medicoBaseSchema.apellido_materno.required(),
    correo: medicoBaseSchema.correo.required(),
    telefono: medicoBaseSchema.telefono.required(),
    direccion: medicoBaseSchema.direccion.required(),
    documento_identidad: medicoBaseSchema.documento_identidad.required()
});

export const modificarMedicoSchema = Joi.object({
    ...medicoBaseSchema
});