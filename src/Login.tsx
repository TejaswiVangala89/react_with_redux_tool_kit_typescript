import { Button, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux"
import data from "./userData.json"
import { useSelector } from "react-redux";
import LoginImage from "./asserts/loginimage.png"
import { getUserState } from "./store/selector";
import { signInError, signInSuccess, signInUser } from "./store/user/userSlice";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 20, height: "80vh", width: "80vw", margin: "20px auto"
    }
}))

const Login = () => {
    const classes = useStyles();
    const [details, setDetails] = useState<{ userId: string; password: string, validation: string }>({
        userId: "",
        password: "",
        validation: ""
    })
    const dispatch = useDispatch();
    const loginState = useSelector(getUserState);
    const btnStyle = { margin: "8px 0" }

    const signIn = () => {
        dispatch(signInUser())
        if (details.userId.trim().length > 0 && details.password.trim().length > 0) {
            const user = data.filter(c => c.userId === details.userId.trim() && c.password === details.password.trim());
            if (user.length > 0) dispatch(signInSuccess({ userId: user[0].userId, role: user[0].role }));
            else dispatch(signInError());
        }
        else setDetails({ ...details, validation: "Please provide user id and password!!" })
    }

    return (
        <Paper elevation={10} className={classes.paper}>

            <Grid container>
                <Grid item xs={6} style={{ padding: "1rem" }}>
                    <Typography variant="h6" style={{ marginTop: "2rem" }}>Lorem ipsum dolor sit amet.</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit.</Typography>
                    <img src={LoginImage} alt="login" style={{ marginTop: "1rem", width: "35vw" }} />
                </Grid>
                <Grid item xs={6} style={{ padding: "1rem" }}>
                    <Grid alignItems="center">
                        <Typography variant="h6">Sample</Typography>
                        <Typography>Welcome, Please login to your account.</Typography>
                    </Grid>
                    <Grid alignItems="center">
                        <Typography variant="h6" style={{ marginTop: "2rem" }}>User Login</Typography>
                        <TextField
                            label="User ID"
                            value={details.userId}
                            placeholder="Enter User Id"
                            variant="standard"
                            fullWidth
                            style={{ marginTop: "1rem" }}
                            onChange={(e: any) => {
                                setDetails({ ...details, userId: e.target.value })
                            }}
                        ></TextField>
                        <TextField
                            label="Password"
                            placeholder="Enter Password"
                            variant="standard"
                            style={{ marginTop: "1rem" }}
                            fullWidth
                            type="password"
                            value={details.password}

                            onChange={(e: any) => {
                                setDetails({ ...details, password: e.target.value })
                            }}
                        ></TextField>

                        <Button color="primary" variant="contained" style={btnStyle} fullWidth onClick={signIn}>Sign In</Button>
                        {loginState.loggedInStatus === "loginerror" ? (<Typography color="error">Invalid Credentials</Typography>) : (<Typography color="error">{details.validation}</Typography>)}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Login;