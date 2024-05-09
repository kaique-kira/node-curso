import React from "react";
import { Route, Routes } from "react-router-dom";
import CadastroLivro from "./cadastroLivro/cadastroLivro";
import App from "./App";
import CadastroAutor from "./cadastroAutor/cadastroAutor";
import BucaNome from "./Busca/buscaNome";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cadastroLivro" element={<CadastroLivro />} />
      <Route path="/CadastroAutor" element={<CadastroAutor />} />
      <Route path="/busca" element={<BucaNome />} />
    </Routes>
  );
};

export default AppRoutes;
