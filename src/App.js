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
          <Route exact path="/login" name="Login" component={LoginPage} />
          <PrivateRoute path="/" component={LayoutPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
