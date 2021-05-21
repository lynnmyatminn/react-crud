import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
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
          <PrivateRoute exact path="/dashboard" component={LayoutPage} />
          <Route path="/login" component={LoginPage} />
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </Router>
    );
  }
}

export default App;
