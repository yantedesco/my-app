import "../../App.css";
import { Botao, Card } from "../../components";
import { data } from "../../data/champions";
import { useHistory } from "react-router-dom";

export const LeagueChampions = () => {
  const history = useHistory();
  return (
    <div className="container">
      <header>
        <h2>League of Legends</h2>
        <h3>Champions</h3>
      </header>
      <div className="card-container">
        {data.map((champion) => (
          <Card
            key={champion.id}
            nome={champion.name}
            tags={champion.tags}
            imagem={champion.icon}
          />
        ))}
      </div>
      <Botao nome="Quem Somos" onClick={() => history.push("/quem-somos")} />
    </div>
  );
};
