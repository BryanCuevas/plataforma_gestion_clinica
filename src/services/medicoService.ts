import { PrismaClient, medicos } from "@prisma/client";
import {IMedico} from "../models/Medico";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

//Create
export const insertarMedico = async(medico : IMedico) => {
    await prisma.medicos.create({
        data : medico
    });
    return RESPONSE_INSERT_OK;
}

//Read all
export const listarMedicos = async() => {
    const medicos: medicos[] = await prisma.medicos.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return medicos.map((medico: medicos) => medico);
}

//Read by id
export const obtenerMedico = async(id : number) => {
    const medico: medicos =  await prisma.medicos.findUnique({
        where: {
            id_medico: id,
            estado_auditoria : '1'
        }
    });
    return medico;
}

//Update
export const modificarMedico = async(id : number, medico : IMedico) => {
    await prisma.medicos.update({
        data: medico,
        where:{
            id_medico: id
        }
    });
    return RESPONSE_UPDATE_OK;
}

//Delete
export const eliminarMedico = async(id : number) => {  
    await prisma.medicos.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_medico: id
        }
    });
    return RESPONSE_DELETE_OK;
}