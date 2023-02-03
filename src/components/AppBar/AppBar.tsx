import React from "react";
import { Link } from "react-router-dom";
import MuiAppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getUserState } from "../../store/selector";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    iconNamePair: {
      display: "flex",
      alignItems: "center",
      "&>span>svg": {
        margin: theme.spacing(0, 1),
      },
    },
    logo: {
      display: "flex",
      alignItems: "center",
      width: "25px",
      textDecoration: "none",
      [theme.breakpoints.up("sm")]: {
        width: "300px",
      },
    },
    multilineButtonText: {
      lineHeight: 1.2,
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
    },
    smallText: {
      fontSize: "0.8em",
    },
    button: {
      marginRight: "2px",
    },
  })
);

const AppBar = () => {
  const classes = useStyles();
  const userDetails = useSelector(getUserState);

  return (
    <MuiAppBar position="fixed" color="default">
      <Toolbar>
        <Grid className={classes.logoContainer}>
          <Link to="/" className={"brand " + classes.logo}>
            <Typography color="textPrimary" variant="h4">
              Sample
            </Typography>
          </Link>
        </Grid>

        <IconButton
          aria-label={"Open drawer"}
          color="inherit"
          data-testid="hamburgerMenuButton"
          edge="end"
        >
          <Typography>{userDetails?.userDetails?.userId}</Typography>
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
