import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Botao } from "../../components";
import { DataContext } from "../../context/data";

export const Home = () => {
  const history = useHistory();
  const { nome, handleSetNome } = useContext(DataContext);

  return (
    <>
      <h1>HOME</h1>
      <label style={{ fontSize: 40 }}>Nome</label>
      <input
        style={{ fontSize: 40 }}
        type="text"
        value={nome || ""}
        onChange={(evento) => handleSetNome(evento)}
      />
      <br />
      <Botao nome="Champions" onClick={() => history.push("/champions")} />
      <Botao nome="Quem Somos" onClick={() => history.push(`/quem-somos/`)} />
    </>
  );
};
