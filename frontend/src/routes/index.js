import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
