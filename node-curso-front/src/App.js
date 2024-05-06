import { FiSearch } from "react-icons/fi";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [livros, setLivros] = useState([]);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/livros/busca/titulo?titulo=${termoBusca}`
        );
        const livrosFormatados = response.data.map((livro) => ({
          ...livro,
          autor: livro.autor.nome,
        }));
        setLivros(livrosFormatados);
      } catch (error) {
        console.error("Erro ao buscar livros", error);
      }
    };
    fetchLivros();
  }, [termoBusca]);

  const handleInputChange = (event) => {
    setTermoBusca(event.target.value);
  };
  return (
    <div className="container">
      <h1 className="title">Biblioteca - Livros</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o nome do livro"
          value={termoBusca}
          onChange={handleInputChange}
        />
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        {livros.length > 0 ? (
          livros.map((livro) => (
            <div key={livro._id}>
              <div>
                <h2>Livro: {livro.titulo}</h2>
                <div>
                  <span>Autor: {livro.autor}</span>
                </div>
                <div>
                  <span>Editora: {livro.editora}</span>
                </div>
                <div>
                  <span>Paginas: {livro.paginas}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum livro encontrado</p>
        )}
      </main>
    </div>
  );
}
export default App;
