import React, { Component } from "react";
import PricesPerBoxDataService from "../services/pricesperbox.service";
import { Link } from "react-router-dom";

export default class PricesPerBoxesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePricesPerBoxes = this.retrievePricesPerBoxes.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePricesPerBox = this.setActivePricesPerBox.bind(this);
    this.removeAllPricesPerBoxes = this.removeAllPricesPerBoxes.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      pricesperboxes: [],
      currentPricesPerBox: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrievePricesPerBoxes();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrievePricesPerBoxes() {
    PricesPerBoxDataService.getAll()
      .then(response => {
        this.setState({
            pricesperboxes: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePricesPerBoxes();
    this.setState({
        currentPricesPerBox: null,
      currentIndex: -1
    });
  }

  setActivePricesPerBox(pricesperbox, index) {
    this.setState({
        currentPricesPerBox: pricesperbox,
      currentIndex: index
    });
  }

  removeAllPricesPerBoxes() {
    PricesPerBoxDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
        currentPricesPerBox: null,
      currentIndex: -1
    });

    PricesPerBoxDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
            pricesperboxes: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, pricesperboxes, currentPricesPerBox, currentIndex } = this.state;

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
          <h4>PricesPerBoxes List</h4>

          <ul className="list-group">
            {pricesperboxes &&
              pricesperboxes.map((pricesperbox, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePricesPerBox(pricesperbox, index)}
                  key={index}
                >
                  {pricesperbox.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllPricesPerBoxes}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentPricesPerBox ? (
            <div>
              <h4>PricesPerBox</h4>
              <div>
                <label>
                  <strong>Code:</strong>
                </label>{" "}
                {currentPricesPerBox.code}
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentPricesPerBox.name}
              </div>
              <div>
                <label>
                  <strong>Location:</strong>
                </label>{" "}
                {currentPricesPerBox.location}
              </div>
              <div>
                <label>
                  <strong>Price:</strong>
                </label>{" "}
                {currentPricesPerBox.price}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentPricesPerBox.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentPricesPerBox.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/pricesperboxes/" + currentPricesPerBox.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
              
              <Link
                to={"/pricesperboxes/" + currentPricesPerBox.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Prices Per Box...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
