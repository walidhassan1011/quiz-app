import { Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "./components/Page/Page";
import Quiz from "./components/Quiz/Quiz";
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
        </Switch>
      </ForecastProvider>
    </div>
  );
}

export default App;
