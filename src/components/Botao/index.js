import React from "react";

const Botao = (props) => {
  const estiloBotao = {
    backgroundColor: "#d1d1d1",
    color: "#1d1d1d",
    border: "none",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "2rem",
    margin: "4px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold"
  };

  return (
    <button style={estiloBotao} onClick={props.onClick}>
      {props.nome}
    </button>
  );
};

export default Botao;
