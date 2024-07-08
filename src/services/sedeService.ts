import { PrismaClient, sedes } from "@prisma/client";
import {ISede} from "../models/Sede";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

//Create
export const insertarSede = async(sede : ISede) => {
    await prisma.sedes.create({
        data : sede
    });
    return RESPONSE_INSERT_OK;
}

//Read all
export const listarSedes = async() => {
    const sedes: sedes[] = await prisma.sedes.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return sedes.map((sede: sedes) => sede);
}

//Read by id
export const obtenerSede = async(id : number) => {
    const sede: sedes =  await prisma.sedes.findUnique({
        where: {
            id_sede: id,
            estado_auditoria : '1'
        }
    });
    return sede;
}

//Update
export const modificarSede = async(id : number, sede : ISede) => {
    await prisma.sedes.update({
        data: sede,
        where:{
            id_sede: id
        }
    });
    return RESPONSE_UPDATE_OK;
}

//Delete
export const eliminarSede = async(id : number) => {  
    await prisma.sedes.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_sede: id
        }
    });
    return RESPONSE_DELETE_OK;
}