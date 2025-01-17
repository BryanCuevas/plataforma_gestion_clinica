import { Request, Response } from "express";
import * as pacienteService from "../services/pacienteService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarPacienteSchema, modificarPacienteSchema } from "../schemas/pacienteSchema"

export const insertarPaciente = async (req : Request, res : Response) => {
    console.log('pacienteController : insertarPaciente');
    try {
        const { error } = insertarPacienteSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }
        const response = await pacienteService.insertarPaciente(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const listarPacientes = async (req : Request, res : Response) => {
    console.log('pacienteController : listarPacientes');
    try {
        const pacientes = await pacienteService.listarPacientes();
        res.status(200).json(ResponseModel.success(pacientes));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const obtenerPaciente = async (req : Request, res : Response) => {
    console.log('pacienteController : obtenerPaciente');
    try {
        const { id } = req.params;
        const paciente = await pacienteService.obtenerPaciente(Number(id))
        res.status(200).json(ResponseModel.success(paciente));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const modificarPaciente = async (req : Request, res : Response) => {
    console.log('pacienteController : modificarPaciente');
    try {
        const { id } = req.params;
        const { error } = modificarPacienteSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }
        const response = await pacienteService.modificarPaciente(Number(id), req.body)
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 

export const eliminarPaciente = async (req : Request, res : Response) => {
    console.log('pacienteController : eliminarPaciente');
    try {
        const { id } = req.params;
        const response = await pacienteService.eliminarPaciente(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
} 