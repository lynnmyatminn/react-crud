import React from "react";
import { connect } from "react-redux";

import { alertActions, userActions } from "../../actions";
import { history } from "../../history";
import { LockClosedIcon, MailIcon } from "@heroicons/react/solid";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem("token")) {
      history.push("/");
    }

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });

    this.state = {
      email: "",
      password: "",
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }

  render() {
    const { email, password } = this.state;
    const { alert } = this.props;
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="../../assets/images/delivery.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center uppercase text-3xl font-extrabold text-gray-900">
              Delivery App
            </h2>
          </div>
          <div className="shadow-lg p-6 bg-white rounded-lg">
            <form onSubmit={this.handleSubmit}>
              {alert.message && (
                <div className="flex items-center justify-center rounded bg-red-400 text-white font-semibold text-lg">
                  <p>{alert.message}</p>
                </div>
              )}
              <div className="rounded-md shadow-sm mb-4 mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-10 py-2 sm:text-sm border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="rounded-md shadow-sm mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-10 py-2 sm:text-sm border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}
const actionCreators = {
  login: userActions.login,
  clearAlerts: alertActions.clear,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);

export default connectedLoginPage;
