import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import LoginProvider from "./LoginProvider";
import store from "./store/configureStore";
import { createTheme, Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import { ThemeType } from "./store/theme/types";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles(() => ({
  themeToggle: {
    textAlign: "right",
    position: "absolute",
    marginLeft: "88vw",
    marginTop: "0.5rem",
    zIndex: 9999
  }
}))

const history = createBrowserHistory();

const Root = () => {
  const classes = useStyles();
  // const themeState = useSelector(getThemeState);
  const [theme, setTheme] = useState<ThemeType>("dark")
  return (
    <Grid>
      <Grid className={classes.themeToggle}>
        <IconButton onClick={() => {
          setTheme(theme === 'light' ? "dark" : "light")
        }}>
          {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Grid>
      <Provider store={store}>
        <ThemeProvider theme={createTheme({ palette: { type: theme || "light" } })}>
          <LoginProvider>
            <Router history={history}>
              <CssBaseline />
              <App />
            </Router>
          </LoginProvider>
        </ThemeProvider>
      </Provider>
    </Grid>
  )
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
