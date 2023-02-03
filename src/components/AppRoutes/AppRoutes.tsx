import React from "react";
import { Route } from "react-router-dom";
import { AsyncContactUs, AsyncDetails, AsyncLanding } from "./LoadableRoutes";

const getAppRoutes = () => {

  return [
    <Route exact path="/" component={AsyncLanding} />,
    <Route exact path="/contactus" component={AsyncContactUs} />,
    <Route path="/details" component={AsyncDetails} />,
  ];
};

export default getAppRoutes;
