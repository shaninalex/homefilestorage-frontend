import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.models";


export const GetUserStart = createAction(
    "[User] Get User Start"
);

export const GetUserSuccess = createAction(
    "[User] Get User Success",
    props<{ user: User }>()
);

// TODO: set global user error instead of spaming the same error for every action
export const GetUserError = createAction(
    "[User] Get User Error",
    props<{ error: string }>()
);

export const PatchUser = createAction(
    "[User] Patch",
    props<{ user: User }>()
)

export const PatchUserSuccess = createAction(
    "[User] Patch Success"
)
