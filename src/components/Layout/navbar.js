import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { connect } from "react-redux";
import { toggleActions } from "../../actions";

class NavBar extends React.Component {
  render() {
    return (
      <div className="sticky top-0 z-40">
        <div className="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">
          <div className="flex">
            <div className="lg:hidden flex items-center mr-4">
              <button
                className="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
                onClick={this.props.toggleMenu}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="relative text-gray-600">
              <input
                type="search"
                name="serch"
                placeholder="Search products..."
                className="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
          <Menu as="div" className="flex items-center relative">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="focus:outline-none focus:">
                    <img
                      src="./assets/images/profile.jpg"
                      className="w-12 h-12 rounded-full shadow-lg"
                      alt="profile"
                    />
                  </Menu.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="origin-top-right absolute right-0 mt-4 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        <a
                          href="/profile"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          Profile
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/login"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          Logout
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </div>
              </>
            )}
          </Menu>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    menu: state.menu,
  };
}

const actionCreators = {
  toggleMenu: toggleActions.toggleMenu,
};

const connectedSideBar = connect(mapState, actionCreators)(NavBar);

export default connectedSideBar;
