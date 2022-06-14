import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LeagueChampions } from "./pages/LeagueChampions";
import { NotFound } from "./pages/NotFound";
import { QuemSomos } from "./pages/QuemSomos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LeagueChampions} exact />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
