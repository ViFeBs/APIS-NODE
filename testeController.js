const router = require('express').Router()

router.get('/teste/', (req, resp) => {
    let r = {
        status: 'OK'
    }
    resp.send(r)
})

//PARAMETROS QUERY STRING
router.get('/teste/rota1', (req,resp) => {
    let params = req.query
    resp.send(params)
})

//PARAMETROS DE ROTA
router.get('/teste/rota2/params/:a/:b/', (req,resp) => {
    let params = req.params
    resp.send(params)
})


module.exports = router