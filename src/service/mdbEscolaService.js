const escolaDatabase = require('../database/mongoDatabase')
const db = new escolaDatabase()

class EscolaService{
    listar(){
       return db.listar()
    }

    inserir(aluno){
        if(!aluno.nome ||
           !aluno.chamada ||
           !aluno.turma ||
           !aluno.curso)
           throw 'Aluno Inválido'      
        db.inserir(aluno)
    }

    alterar(id, aluno){
       if(id < 0)
            throw 'Aluno Inválido'
        if(!aluno.nome)
            throw 'Aluno Inválido'       
        db.alterar(id, aluno)
    }

    async deletar(id){
        if(id < 0)
            throw 'Aluno Inválido'
        let r = await db.deletar(id)
        if(r.deletedCount === 0)
            throw 'Aluno não Existe'
        
    }
}

module.exports = EscolaService