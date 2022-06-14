import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Botao } from "../../components";

export const Home = () => {
  const [usuario] = useState({
    nome: "Yan",
    idade: 25
  });

  const history = useHistory();

  return (
    <>
      <h1>HOME</h1>
      <Botao nome="Champions" onClick={() => history.push("/champions")} />
      <Botao nome="Quem Somos" onClick={() => history.push(`/quem-somos/${usuario.nome}`)} />
    </>
  );
};
