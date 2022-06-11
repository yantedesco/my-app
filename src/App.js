import { useState } from "react";
import "./App.css";
import { Botao } from "./components/Botao";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Contador</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Botao nome="+ 1" onClick={() => setContador(contador + 1)} />
            <Botao nome="- 1" onClick={() => setContador(contador - 1)} />
          </div>
          <h3 className="resultadoado">{contador}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
