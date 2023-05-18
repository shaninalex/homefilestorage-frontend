import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.models";


export const GetUserStart = createAction(
    "[User] Get User Start"
);

export const GetUserSuccess = createAction(
    "[User] Get User Success",
    props<{ user: User }>()
);

export const GetUserError = createAction(
    "[User] Get User Error",
    props<{ error: string }>()
);
