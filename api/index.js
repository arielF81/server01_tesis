import express from "express";
import cors from "cors";
import PecesRoute from './routes/peces.routes.js';
import NudosRoute from './routes/nudos.routes.js';

//import path from "path"; //modulo de node

const app = express();
app.set("view engine", "ejs")




app.use(express.json()); // esto es para poder enviar un json por medio de apis
app.use(cors());



app.use('/', PecesRoute)
app.use('/', NudosRoute)


export default app;