let alunos = []

class EscolaDatabase{
    listar(){
        return alunos
    }

    inserir(aluno){
        alunos.push(aluno)
    }

    alterar(pos, aluno){
        let a = alunos[pos]
        a.nome = aluno.nome
    }

    deletar(pos){
        alunos.splice(pos, 1)
    }
}

module.exports = EscolaDatabase