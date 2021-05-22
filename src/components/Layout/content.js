import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";
class Content extends React.Component {
  render() {
    return (
      <Switch>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        })}
        <Redirect from="/" to="/dashboard" />
      </Switch>
    );
  }
}

export default React.memo(Content);
