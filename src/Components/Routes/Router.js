import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../../App";
import LandingPage from "../LandingPage";

const Router = () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/home" component={LandingPage} />
  </Switch>
  </BrowserRouter>
);

export default Router;
