const router = require('express').Router()

let alunos = []

router.get('/escola/', (req,resp) => {
    resp.send(alunos)
})

router.post('/escola/', (req,resp) => {
    let aluno = req.body
    alunos.push(aluno)
    resp.end()
})

router.put('/escola/:pos', (req,resp) => {
    let aluno = alunos[req.params.pos]
    aluno.nome = req.body.nome
    resp.end()
})

router.delete('/escola/:pos', (req,resp) => {
    alunos.splice(req.params.pos, 1)
    resp.end()
})
module.exports = router