import React from "react";
import SiderBar from "./sidebar";
import NavBar from "./navbar";
import { connect } from "react-redux";
import Content from "./content";

class Home extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <div className="leading-normal tracking-normal" id="main-body">
        <div className="flex flex-wrap">
          <SiderBar />
          <div
            className={
              "w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" +
              (menu.isShow ? "relative" : "")
            }
          >
            <NavBar />
            <div className="p-6 bg-gray-100 mb-20">
              <Content />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    menu: state,
  };
}

const connectedHome = connect(mapState)(Home);

export default connectedHome;
