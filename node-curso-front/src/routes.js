import React from "react";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import CadastroLivro from "./cadastroLivro/cadastroLivro";
import App from "./App";
import CadastroAutor from "./cadastroAutor/cadastroAutor";
import BucaNome from "./Busca/buscaNome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/cadastroLivro" element={<CadastroLivro />}></Route>
        <Route path="/CadastroAutor" element={<CadastroAutor />}></Route>
        <Route path="/busca" element={<BucaNome />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
