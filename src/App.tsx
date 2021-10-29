import "./styles/main.scss";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import { Register } from "./views/Register";
import { Onboarding } from "./views/Onboarding";
import { Main } from "./views/Main";
import * as React from "react";

export const App: React.FC = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={LandingPage} exact></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/onboarding" component={Onboarding}></Route>
      <Route path="/main" component={Main}></Route>
    </Switch>
  </div>
);
