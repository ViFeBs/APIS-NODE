const router = require('express').Router()

const MongoDB = require('mongodb').MongoClient
let mongoConnection
MongoDB
    .connect('mongodb+srv://FeBs:BrDEV@cluster0.qtdeh.mongodb.net/?retryWrites=true&w=majority')
    .then(conn => {
        mongoConnection = conn
        console.log('......: mongodb connected')
    })
    .catch(e => console.log(e))

router.get('/mongo/dados', async (req,resp) => {
    let db = mongoConnection.db('teste').collection('dados')
    let dados = await db.find().toArray()
    resp.send(dados)
})

module.exports = router