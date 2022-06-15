//server
const express = require('express')
const server  = express()
const port = process.env.PORT | 8080
const cors = require('cors')
server.use(cors())
server.use(express.json())

//controllers
const testeController = require('./testeController')
const mongo = require('./mongoController')
const escola = require('./escolaController')



server.use(escola)
server.use(mongo)
server.use(testeController)
server.listen(port, () => console.log(`API INICIADA COM SUCESSO na ${port}`))