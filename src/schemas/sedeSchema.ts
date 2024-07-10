import Joi from "joi";

const sedeBaseSchema = {
    nombre : Joi.string()
        .min(4)
        .max(150),
    departamento: Joi.string()
        .pattern(/^[a-zA-Z\s]+$/) //Solo letras y espacios
        .min(4)
        .max(100),
    provincia: Joi.string()
        .pattern(/^[a-zA-Z\s]+$/) //Solo letras y espacios
        .min(4)
        .max(100),
    distrito: Joi.string()
        .pattern(/^[a-zA-Z\s]+$/) //Solo letras y espacios
        .min(4)
        .max(100),
    direccion: Joi.string()
        .pattern(/^[a-zA-Z0-9\s.,#\-°]+$/) //Solo alfanuméricos, espacios y caracteres comunes asociados a direcciones
        .min(10)
        .max(200),        
};

export const insertarSedeSchema = Joi.object({
    ...sedeBaseSchema,
    nombre: sedeBaseSchema.nombre.required(),
    departamento: sedeBaseSchema.departamento.required(),
    provincia: sedeBaseSchema.provincia.required(),
    distrito: sedeBaseSchema.distrito.required(),
    direccion: sedeBaseSchema.direccion.required()
});

export const modificarSedeSchema = Joi.object({
    ...sedeBaseSchema
});