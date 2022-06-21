const router = require('express').Router()
const escolaService = require('../service/mdbEscolaService')
const service = new escolaService()

router.get('/mongo/escola', async (req,resp) => {
    try{
        let alunos = await service.listar()
        resp.send(alunos)
    }catch(e){
        resp.status(400)
            .send({
            erro : e
        })
    }
})

router.post('/mongo/escola/', async (req,resp) => {
    try{
        await service.inserir(req.body)
        resp.end()
    }catch(e){
        resp.status(400)
            .send({
            erro : e
        })
    }
})

router.put('/mongo/escola/:id', async (req,resp) => {
    try{
        await service.alterar(req.params.id, req.body)
        resp.end()
    }catch(e){
        resp.status(400)
            .send({
            erro : e
        })
    }
})

router.delete('/mongo/escola/:id', async (req,resp) => {
    try{
        await service.deletar(req.params.id)
        resp.end()
    }catch(e){
        resp.status(400)
            .send({
            erro : e
        })
    }
})

module.exports = router