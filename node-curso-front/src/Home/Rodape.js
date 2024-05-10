import React from "react";

const Rodape = ({ membros }) => {
  return (
    <footer className="rodape">
      <h3>Membros:</h3>
      <ul>
        {membros.map((membro, index) => (
          <li key={index}>
            {membro.nome} - RA: {membro.ra}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Rodape;
