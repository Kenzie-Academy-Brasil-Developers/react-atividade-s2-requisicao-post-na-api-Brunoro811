import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <Switch>
      <Route exact to="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
