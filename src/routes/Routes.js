import React /* useState */ from "react";
import { Route, Switch } from "react-router";
import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import SignUpContainer from "../containers/SignUpContainer";
import TermsConditions from "../containers/TermsConditions";
// import UserContext from "../contexts/UserContext";
import RestrictedRoutes from "./RestrictedRoutes";

function Routes() {
  // const [user, setUser] = useState(null);
  return (
    // <UserContext.Provider value={{ user, setUser }}>
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
    // </UserContext.Provider>
  );
}

export default Routes;
