import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./private.route";
import { history } from "./history";

import "./index.css";

import LayoutPage from "./components/Layout";
import LoginPage from "./components/Auth";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute path="/" component={LayoutPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
