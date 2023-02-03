import { ThemeState } from "./theme/types";
import { UserState } from "./user/types";

export type LoginStatus =
        "loging" |
        "loginsuccess" |
        "loginerror" |
        "unset";

export interface RootState {
    user: UserState,
    theme: ThemeState
}