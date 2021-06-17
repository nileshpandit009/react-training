import React from "react";
import { Route, Switch } from "react-router";
import HomeContainer from "containers/HomeContainer";
import LoginContainer from "containers/LoginContainer";
import SignUpContainer from "containers/SignUpContainer";
import TermsConditions from "containers/TermsConditions";
import RestrictedRoutes from "./RestrictedRoutes";

function Routes() {
  return (
    <Switch>
      <Route path="/login" render={() => <LoginContainer />} />
      <Route path="/signup" render={() => <SignUpContainer />} />
      <Route exact path="/" render={() => <HomeContainer />} />
      <Route
        exact
        path="/terms-and-conditions"
        render={(props) => <TermsConditions {...props} />}
      />
      <Route path="/dashboard" component={RestrictedRoutes} />
    </Switch>
  );
}

export default Routes;
