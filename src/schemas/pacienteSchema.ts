import Joi from "joi";

const pacienteBaseSchema = {
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

export const insertarPacienteSchema = Joi.object({
    ...pacienteBaseSchema,
    id_usuario: pacienteBaseSchema.id_usuario.required(),
    nombres: pacienteBaseSchema.nombres.required(),
    apellido_paterno: pacienteBaseSchema.apellido_paterno.required(),
    apellido_materno: pacienteBaseSchema.apellido_materno.required(),
    telefono: pacienteBaseSchema.telefono.required(),
    direccion: pacienteBaseSchema.direccion.required(),
    documento_identidad: pacienteBaseSchema.documento_identidad.required()
});

export const modificarPacienteSchema = Joi.object({
    ...pacienteBaseSchema
});