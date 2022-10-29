import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPagina: {type: Number}
    }
);

const Livros = mongoose.model('Livros', livroSchema);

export default Livros;