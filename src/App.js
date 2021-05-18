import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./private.route";
import { history } from "./history";

import "./index.css";

// import AddTutorial from "./components/add-tutorial.component";
// import Tutorial from "./components/tutorial.component";
// import TutorialsList from "./components/tutorials-list.component";

// import AddCustomer from "./components/add-customer.component";
// import Customer from "./components/customer.component";
// import CustomersList from "./components/customers-list.component";

// import AddLocation from "./components/add-location.component";
// import Location from "./components/location.component";
// import LocationsList from "./components/locations-list.component";

// import AddPricesPerBox from "./components/add-pricesperbox.component";
// import PricesPerBox from "./components/pricesperbox.component";
// import PricesPerBoxesList from "./components/pricesperboxes-list.component";

import HomePage from "./components/Layout";
import LoginPage from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
