import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as ROUTES from "./constans/route";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{user}}>
      <Router>
        <Suspense fallback="Loading">
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} exact />
            <Route path={ROUTES.SING_UP} component={SignUp} exact />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
