import { Request, Response } from "express";
import * as citaServices from "../services/citaServices";
import { ResponseModel } from "../models/ResponseModel";

export const insertarCita = async (req : Request, res : Response) => {
    console.log('citaController : insertarCitas');
    try {
        const response = await citaServices.insertarCita(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const listarCitas = async (req : Request, res : Response) => {
    console.log('citaController : listarCitas');
    try {
        const citas = await citaServices.listarCitas();
        res.status(200).json(ResponseModel.success(citas));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const obtenerCita = async (req : Request, res : Response) => {
    console.log('citaController : obtenerCita');
    try {
        const { id } = req.params;
        const cita = await citaServices.obtenerCita(Number(id))
        res.status(200).json(ResponseModel.success(cita));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const modificarCita = async (req : Request, res : Response) => {
    console.log('citaController : modificarCita');
    try {
        const { id } = req.params;
        const response = await citaServices.modificarCita(Number(id), req.body)
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const eliminarCita = async (req : Request, res : Response) => {
    console.log('citaController : eliminarCita');
    try {
        const { id } = req.params;
        const response = await citaServices.eliminarCita(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 