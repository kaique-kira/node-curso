import livros from "../models/Livro.js";

class livroController{
    static getLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) =>{
        res.status(200).json(livros)
    })
    }

    static getLivrosById = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) =>{
            if(err){
                res.status(400).send({message: `${err.message} - Id fo livro não identificado`})
            } else {
                res.status(200).send(livros);
            }
        })
    }

    static createLivros = (req, res) => {
        let livro = new livros(req.body);
        
        livro.save((err) => {
            if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static updateLivros = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if (!err) {
                res.status(200).send({message: 'Livro Atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteLivros = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete (id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Livro Removido com Sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static getLivroByEditora = (req, res) =>{
        const editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros)=>{
            res.status(200).send(livros);
        })
    }
}

export default livroController;