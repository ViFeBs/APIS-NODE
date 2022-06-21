const router = require('express').Router()
const escolaService = require('../service/escolaService')
const service = new escolaService()

router.get('/escola/', (req,resp) => {
    try{
        let alunos = service.listar()
        resp.send(alunos)
    }catch(e){
        resp.send({
            erro : e
        })
    }
})

router.post('/escola/', (req,resp) => {
    try{
        service.inserir(req.body)
        resp.end()
    }catch(e){
        resp.status(400)
            .send({
            erro : e
        })
    }
})

router.put('/escola/:pos', (req,resp) => {
    try{
        service.alterar(req.params.pos, req.body)
        resp.end()
    }catch(e){
        resp.status(400)
        resp.send({
            erro : e
        })
    }
})

router.delete('/escola/:pos', (req,resp) => {
    try{
        service.deletar(req.params.pos)
        resp.end()
    }catch(e){
        resp.status(400)
        resp.send({
            erro : e
        })
    }
})

module.exports = router