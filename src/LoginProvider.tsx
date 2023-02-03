import React, { ReactNode } from "react"
import { useSelector } from "react-redux"
import Login from "./Login";
import { getUserState } from "./store/selector";

const LoginProvider: React.FC<{children?: ReactNode}> = ({children}) => {
    const loginState = useSelector(getUserState);

    if (loginState.loggedInStatus === "loginsuccess") return <>{children}</>
    else return <Login/>
}

export default LoginProvider;