import React, { Component } from "react";
import LocationDataService from "../services/location.service";

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);

    this.state = {
      currentLocation: {
        id: null,
        name: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getLocation(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentLocation: {
          ...prevState.currentLocation,
          name: name
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentLocation: {
        ...prevState.currentLocation,
        description: description
      }
    }));
  }

  getLocation(id) {
    LocationDataService.get(id)
      .then(response => {
        this.setState({
          currentLocation: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentLocation.id,
      name: this.state.currentLocation.name,
      description: this.state.currentLocation.description,
      published: status
    };

    LocationDataService.update(this.state.currentLocation.id, data)
      .then(response => {
        this.setState(prevState => ({
            currentLocation: {
            ...prevState.currentLocation,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateLocation() {
    LocationDataService.update(
      this.state.currentLocation.id,
      this.state.currentLocation
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteLocation() {    
    LocationDataService.delete(this.state.currentLocation.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/locations')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentLocation } = this.state;

    return (
      <div>
        {currentLocation ? (
          <div className="edit-form">
            <h4>Location</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentLocation.name}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentLocation.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentLocation.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentLocation.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteLocation}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateLocation}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a location...</p>
          </div>
        )}
      </div>
    );
  }
}
