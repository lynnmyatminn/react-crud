import React, { Component } from "react";
import PricesPerBoxDataService from "../services/pricesperbox.service";

export default class PricesPerBox extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getPricesPerBox = this.getPricesPerBox.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updatePricesPerBox = this.updatePricesPerBox.bind(this);
    this.deletePricesPerBox = this.deletePricesPerBox.bind(this);

    this.state = {
      currentPricesPerBox: {
        id: null,
        name: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getPricesPerBox(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPricesPerBox: {
          ...prevState.currentPricesPerBox,
          name: name
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
        currentPricesPerBox: {
        ...prevState.currentPricesPerBox,
        description: description
      }
    }));
  }

  getPricesPerBox(id) {
    PricesPerBoxDataService.get(id)
      .then(response => {
        this.setState({
            currentPricesPerBox: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentPricesPerBox.id,
      name: this.state.currentPricesPerBox.name,
      description: this.state.currentPricesPerBox.description,
      published: status
    };

    PricesPerBoxDataService.update(this.state.currentPricesPerBox.id, data)
      .then(response => {
        this.setState(prevState => ({
            currentPricesPerBox: {
            ...prevState.currentPricesPerBox,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePricesPerBox() {
    PricesPerBoxDataService.update(
      this.state.currentPricesPerBox.id,
      this.state.currentPricesPerBox
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

  deletePricesPerBox() {    
    PricesPerBoxDataService.delete(this.state.currentPricesPerBox.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/services')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentPricesPerBox } = this.state;

    return (
      <div>
        {currentPricesPerBox ? (
          <div className="edit-form">
            <h4>Prices Per Box</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentPricesPerBox.name}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentPricesPerBox.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentPricesPerBox.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentPricesPerBox.published ? (
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
              onClick={this.deletePricesPerBox}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatePricesPerBox}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a prices per box...</p>
          </div>
        )}
      </div>
    );
  }
}
