/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { history } from "../../history";
import logo from "../../logo.svg";

class Home extends React.Component {
  logout() {
    localStorage.removeItem("token");
    history.push("/login");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Home Page</p>
          <button className="App-link" onClick={this.logout}>
            Logout
          </button>
        </header>
      </div>
    );
  }
}

export default Home;
