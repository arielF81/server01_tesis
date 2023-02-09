// modulo de rutas //
// requiere importar express y controladores
import express from 'express'
import * as NudosController from "../controllers/nudos.controllers.js";
//import {estaLogeado} from "../../middleware/auth.middleware.js";

// creamos una ruta
const route = express.Router()


// ruta + nombre del controlador //
route.get('/api/nudos',NudosController.verNudos)
// dos acciones

export default route