
const escolaDatabase = require('../database/escolaDatabase')
const db = new escolaDatabase()

class EscolaService{
    listar(){
       return db.listar
    }

    inserir(aluno){
        if(!aluno.nome ||
           !aluno.chamada ||
           !aluno.turma ||
           !aluno.curso)
           throw 'Aluno Inválido'      
        db.inserir(aluno)
    }

    alterar(pos, aluno){
       if(pos < 0)
            throw 'Aluno Inválido'
        if(!aluno.nome)
            throw 'Aluno Inválido'       
        db.alterar(pos, aluno)
    }

    deletar(pos){
        if(pos < 0)
            throw 'Aluno Inválido'
        db.deletar(pos)
    }
}

module.exports = EscolaService