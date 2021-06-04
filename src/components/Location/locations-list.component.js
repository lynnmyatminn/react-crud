import React, { Component } from "react";
import LocationDataService from "../../services/location.service";
import { Link } from "react-router-dom";

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveLocations = this.retrieveLocations.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveLocation = this.setActiveLocation.bind(this);
    this.removeAllLocations = this.removeAllLocations.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      locations: [],
      currentLocation: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.retrieveLocations();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  retrieveLocations() {
    LocationDataService.getAll()
      .then((response) => {
        this.setState({
          locations: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveLocations();
    this.setState({
      currentLocation: null,
      currentIndex: -1,
    });
  }

  setActiveLocation(location, index) {
    this.setState({
      currentLocation: location,
      currentIndex: index,
    });
  }

  removeAllLocations() {
    LocationDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentLocation: null,
      currentIndex: -1,
    });

    LocationDataService.findByTitle(this.state.searchTitle)
      .then((response) => {
        this.setState({
          locations: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, locations, currentLocation, currentIndex } =
      this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Locations List</h4>

          <ul className="list-group">
            {locations &&
              locations.map((location, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveLocation(location, index)}
                  key={index}
                >
                  {location.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllLocations}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentLocation ? (
            <div>
              <h4>Location</h4>
              <div>
                <label>
                  <strong>Code:</strong>
                </label>{" "}
                {currentLocation.code}
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentLocation.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentLocation.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentLocation.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/locations/" + currentLocation.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Location...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
