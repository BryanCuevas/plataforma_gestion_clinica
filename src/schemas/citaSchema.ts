import Joi from "joi";

const citaBaseSchema = {
    id_paciente : Joi.number()
        .integer()
        .positive(),
    id_medico : Joi.number()
        .integer()
        .positive(),
    id_especialidad : Joi.number()
        .integer()
        .positive(),
    id_sede : Joi.number()
        .integer()
        .positive(),
    fecha : Joi.string()
        .isoDate(), //formato yyyy-mm--dd
    hora : Joi.string()
        .isoDate(), // formato 23:59:59
    motivo : Joi.string()
        .pattern(/^[a-zA-Z0-9\s.,;°]+$/) //Solo letras, números, espacios y algunos caracteres especiales
        .min(10)
        .max(1000),  
    diagnostico : Joi.string()
        .pattern(/^[a-zA-Z0-9\s.,;°]+$/) //Solo letras, números, espacios y algunos caracteres especiales
        .min(10)
        .max(1000),
    estado : Joi.string()
        .valid('P', 'A', 'C')
};

export const insertarCitaSchema = Joi.object({
    ...citaBaseSchema,
    id_paciente: citaBaseSchema.id_paciente.required(),
    id_medico: citaBaseSchema.id_medico.required(),
    id_especialidad: citaBaseSchema.id_especialidad.required(),
    id_sede: citaBaseSchema.id_sede.required(),
    fecha: citaBaseSchema.fecha.required(),
    hora: citaBaseSchema.hora.required(),
});

export const modificarCitaSchema = Joi.object({
    ...citaBaseSchema
});