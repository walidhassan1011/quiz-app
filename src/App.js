import { Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "./components/Page/Page";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/results/Results";
import ForecastProvider from "./context/ForecastProvider";

function App() {
  return (
    <div className="App">
      <ForecastProvider>
        <Switch>
          <Route exact path="/">
            <Page />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
      </ForecastProvider>
    </div>
  );
}

export default App;
