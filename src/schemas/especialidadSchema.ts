import Joi from "joi";

const especialidadBaseSchema = {
    especialidad : Joi.string()
        .regex(/^[a-zA-Z]+$/) //Solo letras
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