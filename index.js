//server
const express = require('express')
const server  = express()
const port = process.env.PORT | 8080
const cors = require('cors')
server.use(cors())
server.use(express.json())

//controllers
const testeController = require('./src/controller/testeController')
const mongo = require('./src/controller/mongoController')
const escola = require('./src/controller/escolaController')
const mdbescola = require('./src/controller/mdbEscolaController')



server.use(escola)
server.use(mongo)
server.use(testeController)
server.use(mdbescola)

function startServer(conn){
    const db = require('./src/database/mongoDatabase')
    db.injectDB(conn)
    server.listen(port, () => console.log(`API INICIADA COM SUCESSO na ${port}`))
}

const MongoDB = require('mongodb').MongoClient
MongoDB
    .connect('mongodb+srv://FeBs:BrDEV@cluster0.qtdeh.mongodb.net/?retryWrites=true&w=majority')
    .then(startServer)
    .catch(e => {
        console.log(e)
        process.exit(-1)
    })