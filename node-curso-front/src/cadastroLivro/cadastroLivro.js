import React, { useEffect, useState } from "react";
import "./cadastroLivro.css";
import CenteredContainer from "../ContainerCentered/CenteredContainer";
import { bibliotecaFecth } from "../axios/config";

const CadastroLivro = () => {
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    editora: "",
    numeroPaginas: "",
  });
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    async function fetchAutores() {
      try {
        const response = await bibliotecaFecth.get("/autores");
        setAutores(response.data);
      } catch (error) {
        console.error("Erro ao buscar autores", error);
      }
    }

    fetchAutores();
  }, []);

  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bibliotecaFecth.post("/livros", livro);
      if (response.status === 201) {
        alert("Livro cadastrado com sucesso!");
      } else {
        throw new Error("Erro ao cadastrar o livro", livro);
      }
    } catch (error) {
      console.error("Erro ao cadastrar o livro", error);
      alert("Erro ao cadastrar o livro");
    }
  };

  return (
    <CenteredContainer>
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
          </div>
          <div className="form-content">
            <label htmlFor="autor">Autor</label>
            <select id="autor" value={livro.autor} onChange={handleChange}>
              <option value="">Selecione o autor</option>
              {autores.map((autor) => (
                <option key={autor._id} value={autor._id}>
                  {autor.nome}
                </option>
              ))}
            </select>
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
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </CenteredContainer>
  );
};

export default CadastroLivro;
