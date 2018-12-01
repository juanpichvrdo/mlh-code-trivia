import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import Trivia from "../Trivia/Trivia";
import Header from "../Header/Header";

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/trivia" component={Trivia} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
