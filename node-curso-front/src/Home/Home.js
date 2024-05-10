import React from "react";
import Rodape from "./Rodape";

export const Home = () => {
  const membros = [
    { nome: "Kaique Denobi Felipe", ra: "4839650" },
    { nome: "Gabriel Sousa da Rocha", ra: "4833678" },
    { nome: "Victor Hugo Melo Ribeiro", ra: "4846729" },
    { nome: "Lucas Santos Gondim", ra: "4871821" },
    { nome: "Arthur Henrique de Nazaré Luna", ra: "4843657" },
  ];

  return (
    <div className="Center">
      <h1 className="titulo">Home</h1>
      <h2>Controle de biblioteca</h2>
      <p>Projeto Profª Ingrid</p>
      <Rodape membros={membros} />
    </div>
  );
};
