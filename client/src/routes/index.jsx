import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import UserProfile from "../pages/UserProfile";

const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const Routes = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route path={["/", "/home", "/index"]} component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/add-user" component={Register} exact />
      <Route path="/users" exact>
        <Users />
      </Route>
      <Route path="/users/:userId" exact>
        <UserProfile />
      </Route>
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
