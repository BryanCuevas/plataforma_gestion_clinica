import { PrismaClient, usuarios } from "@prisma/client";
import {IUsuario} from "../models/Usuario";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();


export const insertarUsuario = async(usuario : IUsuario) => {
    await prisma.usuarios.create({
        data : usuario
    });
    return RESPONSE_INSERT_OK;
}


export const listarUsuarios = async() => {
    const usuarios: usuarios[] = await prisma.usuarios.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return usuarios.map((usuario: usuarios) => usuario);
}

//Read by id
export const obtenerUsuario = async(id : number) => {
    const usuario: usuarios =  await prisma.usuarios.findUnique({
        where: {
            id_usuario: id,
            estado_auditoria : '1'
        }
    });
    return usuario;
}

//Update
export const modificarUsuario = async(id : number, usuario : IUsuario) => {
    await prisma.usuarios.update({
        data: usuario,
        where:{
            id_usuario: id        
        }
    });
    return RESPONSE_UPDATE_OK;
}

//Delete
export const eliminarUsuario = async(id : number) => {  
    await prisma.usuarios.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_usuario: id
        }
    });
    return RESPONSE_DELETE_OK;
}