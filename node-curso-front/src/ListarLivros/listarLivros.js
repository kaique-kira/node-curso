import React, { useEffect, useState } from "react";
import "./listarLivros.css";
import { bibliotecaFecth } from "../axios/config";

export const ListarLivros = () => {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    try {
      const response = await bibliotecaFecth.get("/livros");

      const data = response.data;

      setLivros(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <div className="container">
      <h1>Ultimos livros</h1>
      {livros.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        livros.map((livros) => (
          <div className="livros" key={livros.id}>
            <h2>{livros.titulo}</h2>
            <h3>{livros.editora}</h3>
            <h3>{livros.autor.nome}</h3>
          </div>
        ))
      )}
    </div>
  );
};
