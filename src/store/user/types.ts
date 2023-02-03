import { LoginStatus } from "../types";

export interface UserDetails {
    userId: string;
    role: number;
}

export interface UserState {
    userDetails?: UserDetails
    loggedInStatus: LoginStatus
}