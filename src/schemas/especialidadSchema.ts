import Joi from "joi";

const especialidadBaseSchema = {
    especialidad : Joi.string()
        .regex(/^[a-zA-Z\s]+$/) //Solo letras y espacios
        .min(5)
        .max(100)
};

export const insertarEspecialidadSchema = Joi.object({
    ...especialidadBaseSchema,
    especialidad: especialidadBaseSchema.especialidad.required()
});

export const modificarEspecialidadSchema = Joi.object({
    ...especialidadBaseSchema
});