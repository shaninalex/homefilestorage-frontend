import { createReducer } from "@ngrx/store";
import { User } from "../../models/user.models";
import { UserActions } from "./user.actions-types";
import { on } from "@ngrx/store";


export interface UserState {
    user?: User
    error?: string
    loading: boolean
};


export const initialState: UserState = {
    user: undefined,
    error: undefined,
    loading: false
};

export const userReducer = createReducer(
    initialState,
    on(UserActions.GetUserStart, (state, action) => ({ ...state, loading: true })),
    on(UserActions.GetUserError, (state, action) => ({ ...state, loading: false, error: action.error })),
    on(UserActions.GetUserSuccess, (state, action) => ({ loading: false, error: undefined, user: action.user })),
);
