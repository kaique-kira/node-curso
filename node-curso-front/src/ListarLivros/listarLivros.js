import React, { useEffect, useState } from "react";
import "./listarLivros.css";
import { bibliotecaFecth } from "../axios/config";

export const ListarLivros = () => {
  const [livros, setLivros] = useState([]);
  const [pagina, setPagina] = useState(1);
  const livrosPorPagina = 12;
  const indiceUltimoLivro = pagina * livrosPorPagina;
  const indicePrimeiroLivro = indiceUltimoLivro - livrosPorPagina;
  const livrosPaginaAtual = livros.slice(
    indicePrimeiroLivro,
    indiceUltimoLivro
  );

  const getLivros = async () => {
    try {
      const response = await bibliotecaFecth.get("/livros");
      const data = response.data;
      setLivros(data);
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
    getLivros();
  }, []);

  return (
    <div className="Center">
      <h1>Últimos livros</h1>
      <div className="livros-container">
        {livrosPaginaAtual.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          livrosPaginaAtual.map((livro) => (
            <div className="livros" key={livro.id}>
              <h2>{livro.titulo}</h2>
              <h3>{livro.editora}</h3>
              <h3>{livro.autor.nome}</h3>
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
          disabled={indiceUltimoLivro >= livros.length}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};
