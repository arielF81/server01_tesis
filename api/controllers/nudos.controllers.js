import * as NudosServicios from "../services/nudos.services.js";

export function verNudos (req,res){
    NudosServicios.traerNudos()
    .then(nudos => res.status(200).json(nudos))
    .catch(err => console.log(err))
}
