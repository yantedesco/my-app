import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Botao } from "../../components";
import { API } from "../../services/api";

export const Home = () => {
  const history = useHistory();
  const [usuario, setUsuario] = useState({ login: "", name: "" });

  useEffect(() => {
    const user = "Facebook";
    const pegarDados = async () => {
      const resposta = await API.get(`/users/${user}`);
      setUsuario(resposta.data);
    };
    pegarDados();
  }, []);

  return (
    <>
      <h1>HOME</h1>
      <h1 style={{ marginLeft: 200 }}>{usuario.name}</h1>
      <Botao nome="Champions" onClick={() => history.push("/champions")} />
      <Botao nome="Quem Somos" onClick={() => history.push(`/quem-somos/`)} />
    </>
  );
};
