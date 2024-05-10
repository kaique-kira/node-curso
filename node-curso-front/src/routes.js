import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BuscaNome from "./Busca/buscaNome";
import CadastroLivro from "./cadastroLivro/cadastroLivro";
import CadastroAutor from "./cadastroAutor/cadastroAutor";
import { Home } from "./Home/Home";
import { ListarLivros } from "./ListarLivros/listarLivros";
import { ListarAutores } from "./listarAutores/listarAutores";

export const appRoutes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/busca",
        element: <BuscaNome />,
      },
      {
        path: "/cadastroLivro",
        element: <CadastroLivro />,
      },
      {
        path: "/cadastroAutor",
        element: <CadastroAutor />,
      },
      {
        path: "/livros",
        element: <ListarLivros />,
      },
      {
        path: "/autores",
        element: <ListarAutores />,
      },
    ],
  },
]);
