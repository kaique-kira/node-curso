import React, { useEffect, useState } from "react";
import "./listarAutores.css";
import { bibliotecaFecth } from "../axios/config";

export const ListarAutores = () => {
  const [autores, setAutores] = useState([]);

  const getAutores = async () => {
    try {
      const response = await bibliotecaFecth.get("/autores");

      const data = response.data;

      setAutores(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAutores();
  }, []);

  return (
    <div className="container">
      <h1>Autores</h1>
      {autores.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        autores.map((autores) => (
          <div className="autores" key={autores.id}>
            <h2>{autores.nome}</h2>
          </div>
        ))
      )}
    </div>
  );
};
