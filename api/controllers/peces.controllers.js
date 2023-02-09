import * as PecesServices from "../services/peces.services.js"

//la capa de controllers trae de los servicios(alumnos, uno,etc.)
// llama al render y ejecuta la vista


function verPeces (req,res){
    PecesServices.traerPeces()
    .then(peces => res.status(200).json(peces))
    .catch(err => console.log(err))
}

function verUnoPez (req, res) {
        
        const id = req.params.idPez
    
        PecesServices.traerPezPorID(id)
            .then(function(pez) {
                if (pez) {
                    
                    res.render("Peces/ver", { pez })
                } else {
                    res.render("404", { msj: "Pez no encontrado" })
                }
            })
    }

export {
    verPeces,
    verUnoPez
}