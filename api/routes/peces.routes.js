// modulo de rutas //
// requiere importar express y controladores
import express from 'express'
import * as PecesController from "../controllers/peces.controllers.js";
//import {estaLogeado} from "../../middleware/auth.middleware.js";
// creamos una ruta
const route = express.Router()


// ruta + nombre del controlador //
route.get('/api/peces', PecesController.verPeces)
route.get('/api/peces/:idPez/ver', PecesController.verUnoPez)
// dos acciones

export default route