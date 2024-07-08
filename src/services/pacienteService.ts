import { PrismaClient, pacientes } from "@prisma/client";
import {IPaciente} from "../models/Paciente";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

//Create
export const insertarPaciente = async(paciente : IPaciente) => {
    await prisma.pacientes.create({
        data : paciente
    });
    return RESPONSE_INSERT_OK;
}

//Read all
export const listarPacientes = async() => {
    const pacientes: pacientes[] = await prisma.pacientes.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return pacientes.map((paciente: pacientes) => paciente);
}

//Read by id
export const obtenerPaciente = async(id : number) => {
    const paciente: pacientes =  await prisma.pacientes.findUnique({
        where: {
            id_paciente: id,
            estado_auditoria : '1'
        }
    });
    return paciente;
}

//Update
export const modificarPaciente = async(id : number, paciente : IPaciente) => {
    await prisma.pacientes.update({
        data: paciente,
        where:{
            id_paciente: id,
        }
    });
    return RESPONSE_UPDATE_OK;
}

//Delete
export const eliminarPaciente = async(id : number) => {  
    await prisma.pacientes.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_paciente: id
        }
    });
    return RESPONSE_DELETE_OK;
}