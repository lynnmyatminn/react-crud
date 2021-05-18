import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

<div>
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <Link to={"/customers"} className="navbar-brand">
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
      <Route exact path={["/", "/customers"]} component={CustomersList} />
      <Route exact path="/addCustomer" component={AddCustomer} />
      <Route path="/customers/:id" component={Customer} />

      <Route exact path={["/", "/locations"]} component={LocationsList} />
      <Route exact path="/addLocation" component={AddLocation} />
      <Route path="/locations/:id" component={Location} />

      <Route exact path={["/", "/services"]} component={PricesPerBoxesList} />
      <Route exact path="/addService" component={AddPricesPerBox} />
      <Route path="/services/:id" component={PricesPerBox} />

      <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
      <Route exact path="/addTutorial" component={AddTutorial} />
      <Route path="/tutorials/:id" component={Tutorial} />
    </Switch>
  </div>
</div>;
