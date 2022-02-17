import { Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "./components/Page/Page";
import ForecastProvider from "./context/ForecastProvider";

function App() {
  return (
    <div className="App">
      <ForecastProvider>
        <Switch>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </ForecastProvider>
    </div>
  );
}

export default App;
