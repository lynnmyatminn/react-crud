import React from "react";
import { connect } from "react-redux";
import navs from "./_nav";
import { history } from "../../history";

class SiderBar extends React.Component {
  render() {
    const { menu } = this.props;
    // console.log(history.location.pathname);
    return (
      <div
        className={
          "w-3/4 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30 " +
          (menu.isShow ? "" : "hidden")
        }
      >
        <div className="w-full h-20 border-b flex px-4 items-center justify-center mb-8">
          <img src="./assets/images/delivery.png" className="w-20" alt="logo" />
        </div>

        {navs.map((nav, ids) => {
          return (
            <div className="mb-4 px-4" key={ids}>
              <p className="pl-4 text-sm font-semibold mb-1 uppercase">
                {nav.name}
              </p>
              {nav.children.map((child, ids) => {
                return (
                  <a
                    href={child.to}
                    className={
                      "w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer " +
                      (history.location.pathname === child.to
                        ? "bg-gray-200"
                        : "")
                    }
                    key={ids}
                  >
                    {
                      <child.icon className="h-6 w-6 fill-current mr-2 text-blue-300" />
                    }
                    <span className="text-gray-700">{child.name}</span>
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

function mapState(state) {
  return {
    menu: state.menu,
  };
}

const connectedSideBar = connect(mapState)(SiderBar);

export default connectedSideBar;
