import React, { useState } from "react";
import "./cadastroLivro.css";
import axios from "axios";

const CadastroLivro = () => {
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    editora: "",
    numeroPaginas: "",
  });

  const [errors, setErrors] = useState({
    titulo: "",
    autor: "",
    editora: "",
    numeroPaginas: "",
  });

  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await axios.post("http://localhost:3000/livros", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(livro),
        });

        if (response.ok) {
          alert("Livro cadastrado com sucesso!");
        } else {
          throw new Error("Erro ao cadastrar o livro");
        }
      } catch (error) {
        console.error("Erro ao cadastrar o livro", error);
        alert("Erro ao cadastrar o livro");
      }
    }
  };

  const validateForm = () => {
    const { titulo, autor, editora, numeroPaginas } = livro;
    const errorsCopy = { ...errors };

    errorsCopy.titulo = titulo ? "" : "O nome do livro é obrigatório";
    errorsCopy.autor = autor ? "" : "O nome do autor é obrigatório";
    errorsCopy.editora = editora ? "" : "O nome da editora é obrigatório";
    errorsCopy.numeroPaginas = numeroPaginas
      ? ""
      : "O número de páginas é obrigatório";

    setErrors(errorsCopy);

    return Object.values(errorsCopy).every((error) => error === "");
  };

  return (
    <div className="sidebar">
      <div className="container">
        <section className="header">
          <h2>Novo Livro</h2>
        </section>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-content">
            <label htmlFor="titulo">Nome de Livro</label>
            <input
              type="text"
              id="titulo"
              placeholder="Digite o nome do livro"
              value={livro.titulo}
              onChange={handleChange}
            />
            <a>{errors.titulo}</a>
          </div>
          <div className="form-content">
            <label htmlFor="autor">Autor</label>
            <input
              type="text"
              id="autor"
              placeholder="Selecione o Autor"
              value={livro.autor}
              onChange={handleChange}
            />
            <a>{errors.autor}</a>
          </div>
          <div className="form-content">
            <label htmlFor="editora">Editora</label>
            <input
              type="text"
              id="editora"
              placeholder="Digite o nome da Editora"
              value={livro.editora}
              onChange={handleChange}
            />
            <a>{errors.editora}</a>
          </div>
          <div className="form-content">
            <label htmlFor="numeroPaginas">Nº páginas</label>
            <input
              type="number"
              id="numeroPaginas"
              placeholder="Digite o número de páginas"
              value={livro.numeroPaginas}
              onChange={handleChange}
            />
            <a>{errors.numeroPaginas}</a>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroLivro;
