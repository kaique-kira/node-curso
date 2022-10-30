import autores from "../models/Autor.js";

class autoresController{
    static getAutores = (req, res) => {
        autores.find((err, autores) =>{
        res.status(200).json(autores)
    })
    }

    static getAutoresById = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) =>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do autor não identificado`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static createAutores = (req, res) => {
        let autor = new autores(req.body);
        
        autor.save((err) => {
            if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar o autor`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static updateAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if (!err) {
                res.status(200).send({message: 'Autor Atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteAutores = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete (id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Autor Removido com Sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default autoresController;