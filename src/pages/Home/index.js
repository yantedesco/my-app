import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Botao } from "../../components";
import axios from "axios";

export const Home = () => {
  const history = useHistory();
  const [dado, setDado] = useState();

  const pegarDados = async () => {
    try {
      const resposta = await axios.get("/users/yantedesco");
      setDado(resposta.data);
    } catch (erro) {
      console.log(erro.message);
    }
  };

  return (
    <>
      <h1>HOME</h1>
      <h2>{dado?.name}</h2>
      <Botao nome="Champions" onClick={() => history.push("/champions")} />
      <Botao nome="Quem Somos" onClick={() => history.push(`/quem-somos/`)} />
      <Botao nome="Pegar Dados" onClick={pegarDados} />
    </>
  );
};
