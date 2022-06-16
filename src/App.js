import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./context/data";
import { Home } from "./pages/Home";
import { LeagueChampions } from "./pages/LeagueChampions";
import { NotFound } from "./pages/NotFound";
import { QuemSomos } from "./pages/QuemSomos";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/champions" component={LeagueChampions} />
          <Route path="/quem-somos/:nome?" component={QuemSomos} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
