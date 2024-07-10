import { Request, Response } from "express";
import * as sedeService from "../services/sedeService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarSedeSchema, modificarSedeSchema } from "../schemas/sedeSchema";

export const insertarSede = async (req : Request, res : Response) => {
    console.log('sedeController : insertarSede');
    try {
        const { error } = insertarSedeSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }
        const response = await sedeService.insertarSede(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const listarSedes = async (req : Request, res : Response) => {
    console.log('sedeController : listarSedes');
    try {
        const sedes = await sedeService.listarSedes();
        res.status(200).json(ResponseModel.success(sedes));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const obtenerSede = async (req : Request, res : Response) => {
    console.log('sedeController : obtenerSede');
    try {
        const { id } = req.params;
        const sede = await sedeService.obtenerSede(Number(id))
        res.status(200).json(ResponseModel.success(sede));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const modificarSede = async (req : Request, res : Response) => {
    console.log('sedeController : modificarSede');
    try {
        const { id } = req.params;
        const { error } = modificarSedeSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }
        const response = await sedeService.modificarSede(Number(id), req.body)
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const eliminarSede = async (req : Request, res : Response) => {
    console.log('sedeController : eliminarSede');
    try {
        const { id } = req.params;
        const response = await sedeService.eliminarSede(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 