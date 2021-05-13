import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

import AddCustomer from "./components/add-customer.component";
import Customer from "./components/customer.component";
import CustomersList from "./components/customers-list.component";

import AddLocation from "./components/add-location.component";
import Location from "./components/location.component";
import LocationsList from "./components/locations-list.component";

import AddPricesPerBox from "./components/add-pricesperbox.component";
import PricesPerBox from "./components/pricesperbox.component";
import PricesPerBoxesList from "./components/pricesperboxes-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            Daily Delivery
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/customers"} className="nav-link">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/locations"} className="nav-link">
                Locations
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/services"} className="nav-link">
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/addTutorial"} className="nav-link">
                Add Tutorial
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to={"/addCustomer"} className="nav-link">
                Add Customer
              </Link>
            </li> */}
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/addTutorial" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route exact path={["/", "/customers"]} component={CustomersList} />
            <Route exact path="/addCustomer" component={AddCustomer} />
            <Route path="/customers/:id" component={Customer} />
            <Route exact path={["/", "/locations"]} component={LocationsList} />
            <Route exact path="/addLocation" component={AddLocation} />
            <Route path="/locations/:id" component={Location} />
            <Route exact path={["/", "/services"]} component={PricesPerBoxesList} />
            <Route exact path="/addService" component={AddPricesPerBox} />
            <Route path="/services/:id" component={PricesPerBox} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
