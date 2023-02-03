import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AppLayout from "./containers/AppLayout";

const App: React.FC = () => {
  return (
    <Switch>
      <Route component={AppLayout} />
    </Switch>
  );
};

export default withRouter(App);
