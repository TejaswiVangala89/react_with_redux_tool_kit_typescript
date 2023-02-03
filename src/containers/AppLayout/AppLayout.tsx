import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "../../components/AppBar";
import Routes from "../Routes/Routes";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      flexShrink: 0,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    routes: {
      cursor: "pointer",
    },
  })
);

const AppLayout = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid className={classes.root}>
      <AppBar/>
      <Grid className={classes.content}>
        <Toolbar />
        <Grid container>
          <Grid item xs={2}>
            <Card style={{ height: "85vh" }}>
              <List>
                {[
                  { link: "/", title: "Landing" },
                  { link: "/contactus", title: "Contact Us" },
                  { link: "/details", title: "Details" },
                ].map((text) => (
                  <ListItem key={text.title} className={classes.routes} onClick={() => {
                    history.push(text.link)
                  }}>
                    <ListItemText>
                      <Button>{text.title}</Button>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid xs={10}>
            <Card style={{ height: "85vh", marginLeft: "1rem" }}>
              <Routes />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppLayout;
