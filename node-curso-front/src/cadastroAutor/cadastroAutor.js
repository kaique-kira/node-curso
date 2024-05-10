import React, { useState } from "react";
import "./cadastroAutor.css";
import { bibliotecaFecth } from "../axios/config";

const CadastroAutor = () => {
  const [autor, setAutor] = useState({
    nome: "",
  });

  const handleChange = (e) => {
    setAutor({ ...autor, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bibliotecaFecth.post("/autores", autor);
      if (response.status === 201) {
        alert("Autor cadastrado com sucesso");
      } else {
        throw new Error("Erro ao cadastrar novo Autor");
      }
    } catch (error) {
      console.error("Erro ao cadastrar o Autor", autor);
      alert("Erro ao cadastrar o Autor");
    }
  };
  return (
    <div className="container">
      <section className="header">
        <h1>Novo Autor</h1>
      </section>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-content">
          <label htmlFor="nome">Nome do Autor</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite o nome do livro"
            value={autor.nome}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroAutor;
