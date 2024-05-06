import livros from "../models/Livro.js";

class livroController {
  static getLivros = (req, res) => {
    livros
      .find()
      .populate("autor")
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };

  static getLivrosById = (req, res) => {
    const id = req.params.id;
    livros
      .findById(id)
      .populate("autor", "nome")
      .exec((err, livros) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Id fo livro não identificado` });
        } else {
          res.status(200).send(livros);
        }
      });
  };

  static createLivros = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar o livro` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static updateLivros = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro Atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteLivros = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro Removido com Sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static getLivroByEditora = async (req, res) => {
    try {
      const editora = req.query.editora;
      const Livro = await livros
        .find({ editora: editora })
        .populate("autor", "nome")
        .exec();
      res.status(200).json(Livro);
    } catch (error) {
      console.error("Erro ao buscar livros por editora", error);
      res.status(500).json({ message: "Erro ao buscar livros por editora" });
    }
  };

  static getLivroByNome = async (req, res) => {
    try {
      const titulo = req.query.titulo;
      const Livro = await livros
        .find({ titulo: titulo })
        .populate("autor", "nome")
        .exec();
      console.log(req.query.titulo);
      res.status(200).json(Livro);
    } catch (error) {
      console.error("Erro ao buscar o livro pelo titulo", error);
      res.status(500).json({ message: "Erro ao buscar o livro pelo titulo" });
    }
  };
}

export default livroController;
