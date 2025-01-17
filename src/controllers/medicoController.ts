import { Request, Response } from "express";
import * as medicoService from "../services/medicoService";
import { ResponseModel } from "../models/ResponseModel";
import {insertarMedicoSchema, modificarMedicoSchema} from "../schemas/medicoSchema";

export const insertarMedico = async (req : Request, res : Response) => {
    console.log('medicoController : insertarMedico');
    try {
        const { error } = insertarMedicoSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }
        const response = await medicoService.insertarMedico(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const listarMedicos = async (req : Request, res : Response) => {
    console.log('medicoController : listarMedicos');
    try {
        const medicos = await medicoService.listarMedicos();
        res.status(200).json(ResponseModel.success(medicos));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const obtenerMedico = async (req : Request, res : Response) => {
    console.log('medicoController : obtenerMedico');
    try {
        const { id } = req.params;
        const medico = await medicoService.obtenerMedico(Number(id))
        res.status(200).json(ResponseModel.success(medico));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const modificarMedico = async (req : Request, res : Response) => {
    console.log('medicoController : modificarMedico');
    try {
        const { id } = req.params;
        const { error } = modificarMedicoSchema.validate(req.body);
        if (error) { 
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }
        const response = await medicoService.modificarMedico(Number(id), req.body)
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const eliminarMedico = async (req : Request, res : Response) => {
    console.log('medicoController : eliminarMedico');
    try {
        const { id } = req.params;
        const response = await medicoService.eliminarMedico(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 