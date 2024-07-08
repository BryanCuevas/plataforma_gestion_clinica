import express, { Application } from "express";
import medicoRoutes from './routes/medicoRoutes';
import pacienteRoutes from './routes/pacienteRoutes';
import sedeRoutes from './routes/sedeRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import especialidadRoutes from './routes/especialidadRoutes';
import citaRoutes from './routes/citasRoutes'
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './api-docs/swagger';

const app : Application = express();

//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1/medicos', medicoRoutes);
app.use('/api/v1/pacientes', pacienteRoutes);
app.use('/api/v1/sedes', sedeRoutes);
app.use('/api/v1/usuarios', usuarioRoutes);
app.use('/api/v1/especialidades', especialidadRoutes);
app.use('/api/v1/citas', citaRoutes);
app.use('/documentacion', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

export default app;