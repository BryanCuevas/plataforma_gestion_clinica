import { PrismaClient, especialidades } from "@prisma/client";
import {IEspecialidad} from "../models/Especialidad";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

//Create
export const insertarEspecialidad = async(especialidad : IEspecialidad) => {
    await prisma.especialidades.create({
        data : especialidad
    });
    return RESPONSE_INSERT_OK;
}

//Read all
export const listarEspecialidades = async() => {
    const especialidades: especialidades[] = await prisma.especialidades.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return especialidades.map((especialidad: especialidades) => especialidad);
}

//Read by id
export const obtenerEspecialidad = async(id : number) => {
    const especialidad: especialidades =  await prisma.especialidades.findUnique({
        where: {
            id_especialidad: id,
            estado_auditoria : '1'
        }
    });
    return especialidad;
}

//Update
export const modificarEspecialidad = async(id : number, especialidad : IEspecialidad) => {
    await prisma.especialidades.update({
        data: especialidad,
        where:{
            id_especialidad: id
        }
    });
    return RESPONSE_UPDATE_OK;
}

//Delete
export const eliminarEspecialidad = async(id : number) => {  
    await prisma.especialidades.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_especialidad: id
        }
    });
    return RESPONSE_DELETE_OK;
}