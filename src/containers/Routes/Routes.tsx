import React from "react";
import getAppRoutes from "../../components/AppRoutes";
import { Switch, withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Routes = () => {
  const appRoutes = getAppRoutes();
  return (
    <Grid>
      <Switch>
        {appRoutes.map((Route, i) => {
          return React.cloneElement(Route, { key: `@appRoutes/${i}` });
        })}
      </Switch>
    </Grid>
  );
};

export default withRouter(Routes);
