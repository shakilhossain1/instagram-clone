import React, { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as ROUTES from "./constans/route"

const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Router>
      <Suspense fallback="Loading">
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
      <div className="bg-blue-500">Hello world okay hello okay</div>
    </Router>
  )
}

export default App
