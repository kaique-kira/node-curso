import livros from "../models/Livro.js";

class livroController{
    static getLivros = (req, res) => {
        livros.find((err, livros) =>{
        res.status(200).json(livros)
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
    }}



export default livroController;