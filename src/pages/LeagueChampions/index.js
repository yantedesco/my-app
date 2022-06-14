import "../../App.css";
import { Card } from "../../components";
import { data } from "../../data/champions";
import { Link } from "react-router-dom";

export const LeagueChampions = () => {
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
      <Link to="/quem-somos">Quem Somos</Link>
    </div>
  );
};
