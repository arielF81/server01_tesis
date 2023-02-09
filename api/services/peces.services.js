// caña, carnada, agua


import { MongoClient, ObjectId } from "mongodb"
// crear al cliente para conectarse al servidor de mongoDB
const client = new MongoClient("mongodb+srv://biufort2022:kmfdm666@cluster0.qqytoqz.mongodb.net/?retryWrites=true&w=majority")

async function traerPeces() {
    //ejecutar el cliente con la funcion asincrónica connect
    return client.connect()
    
.then(async function () {
    console.log("Conectado a MongoDB")
    const db = client.db("Biufort") 
    //genero y retorno la lista de alumnos
    return db.collection("Peces").find().toArray()
})
}

async function traerPezPorID(id) {
    return client.connect()
        .then(function () {
            const db = client.db('Biufort')
            return db.collection('Peces').findOne({ _id: new ObjectId(id) })
        })

}

//guardarAlumnos no forma parte del modulo
export {
    traerPeces, 
    traerPezPorID,
}