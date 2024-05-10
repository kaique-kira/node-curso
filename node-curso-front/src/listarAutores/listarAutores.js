import React, { useEffect, useState } from "react";
import "./listarAutores.css";
import { bibliotecaFecth } from "../axios/config";

export const ListarAutores = () => {
  const [autores, setAutores] = useState([]);
  const [pagina, setPagina] = useState(1);
  const autorPorPagina = 12;
  const indiceUltimoLivro = pagina * autorPorPagina;
  const indicePrimeiroLivro = indiceUltimoLivro - autorPorPagina;
  const autoresPaginaAtual = autores.slice(
    indicePrimeiroLivro,
    indiceUltimoLivro
  );

  const getAutores = async () => {
    try {
      const response = await bibliotecaFecth.get("/autores");

      const data = response.data;

      setAutores(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleProximaPagina = () => {
    setPagina(pagina + 1);
  };

  const handlePaginaAnterior = () => {
    setPagina(pagina - 1);
  };

  useEffect(() => {
    getAutores();
  }, []);

  return (
    <div className="Center">
      <h1>Autores</h1>
      <div className="livros-container">
        {autoresPaginaAtual.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          autoresPaginaAtual.map((autores) => (
            <div className="livros" key={autores.id}>
              <h2>{autores.nome}</h2>
            </div>
          ))
        )}
      </div>
      <div className="pagina-buttons">
        <button onClick={handlePaginaAnterior} disabled={pagina === 1}>
          Página Anterior
        </button>
        <button
          onClick={handleProximaPagina}
          disabled={indiceUltimoLivro >= autores.length}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};
