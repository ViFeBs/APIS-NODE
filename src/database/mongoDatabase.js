const { ObjectID } = require("bson")

let db


class MongoDatabase{
    static injectDB(conn){
        db = conn.db('escola').collection('alunos')
    }

    listar(){
        return db.find().toArray()
    }

    inserir(aluno){
        return db.insertOne(aluno)
    }

    alterar(id, aluno){
        return db.updateOne(
            { _id: ObjectID(id) },
            {
                $set: { nome: aluno.nome }
            }
        )
    }

    deletar(id){
        return db.deleteOne({ _id: ObjectID(id) })
    }
}

module.exports = MongoDatabase