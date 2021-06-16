import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Dashboard from "../containers/Dashboard";
import DetailsContainer from "../containers/DetailsContainer";
import UserDetailsContainer from "../containers/UserDetailsContainer";
import PrivateRoute from "./PrivateRoute";

function RestrictedRoutes() {
  const { path } = useRouteMatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <NavbarComponent />
      <div className="dashboard-main">
        <Switch>
          <PrivateRoute
            path={`${path}/my-account`}
            isAuth={Boolean(user)}
            component={UserDetailsContainer}
          />
          <PrivateRoute
            path={`${path}/details/:id`}
            isAuth={Boolean(user)}
            component={DetailsContainer}
          />
          <PrivateRoute
            path={`${path}`}
            isAuth={Boolean(user)}
            component={Dashboard}
          />
        </Switch>
      </div>
    </>
  );
}

export default RestrictedRoutes;
