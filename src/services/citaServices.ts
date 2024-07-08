import { PrismaClient, citas_medicas } from "@prisma/client";
import {ICitas} from "../models/Citas";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

//Create
export const insertarCita = async(cita_medica : ICitas) => {
    await prisma.citas_medicas.create({
        data : cita_medica
    });
    return RESPONSE_INSERT_OK;
}

//Read all
export const listarCitas = async() => {
    const citas_medicas: citas_medicas[] = await prisma.citas_medicas.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return citas_medicas.map((citas : citas_medicas) => citas);
}

//Read by id
export const obtenerCita = async(id : number) => {
    const cita_medica : citas_medicas =  await prisma.citas_medicas.findUnique({
        where: {
            id_cita: id,
            estado_auditoria : '1'
        }
    });
    return cita_medica;
}

//Update
export const modificarCita = async(id : number, cita : ICitas) => {
    await prisma.citas_medicas.update({
        data: cita,
        where:{
            id_cita: id
        }
    });
    return RESPONSE_UPDATE_OK;
}

//Delete
export const eliminarCita = async(id : number) => {  
    await prisma.citas_medicas.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_cita: id
        }
    });
    return RESPONSE_DELETE_OK;
}