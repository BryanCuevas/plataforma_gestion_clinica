import { Request, Response } from "express";
import * as especialidadService from "../services/especialidadService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarEspecialidad = async (req : Request, res : Response) => {
    console.log('especialidadController : insertarEspecialidad');
    try {
        const response = await especialidadService.insertarEspecialidad(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const listarEspecialidades = async (req : Request, res : Response) => {
    console.log('especialidadController : listarEspecialidades');
    try {
        const especialidades = await especialidadService.listarEspecialidades();
        res.status(200).json(ResponseModel.success(especialidades));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const obtenerEspecialidad = async (req : Request, res : Response) => {
    console.log('especialidadController : obtenerEspecialidad');
    try {
        const { id } = req.params;
        const especialidad = await especialidadService.obtenerEspecialidad(Number(id))
        res.status(200).json(ResponseModel.success(especialidad));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const modificarEspecialidad = async (req : Request, res : Response) => {
    console.log('especialidadController : modificarEspecialidad');
    try {
        const { id } = req.params;
        const response = await especialidadService.modificarEspecialidad(Number(id), req.body)
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const eliminarEspecialidad = async (req : Request, res : Response) => {
    console.log('especialidadController : eliminarEspecialidad');
    try {
        const { id } = req.params;
        const response = await especialidadService.eliminarEspecialidad(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        res.status(500).json(ResponseModel.error(error.message));
    }
} 