import { createReducer } from "@ngrx/store";
import { Identity } from "../../models/user.models";
import { UserActions } from "./user.actions-types";
import { on } from "@ngrx/store";

export interface UserState {
    identity?: Identity
    error?: string
    loading: boolean
}

export const initialState: UserState = {
    identity: undefined,
    error: undefined,
    loading: false
};

export const userReducer = createReducer(
    initialState,
    on(UserActions.verifyIdentityActionStart, (state) => ({ ...state, loading: true })),
    on(UserActions.verifyIdentityActionSuccess, (state, action) => ({ ...state, loading: false, error: undefined, identity: action.payload })),
    on(UserActions.verifyIdentityActionError, (state, action) => ({ ...state, loading: false, error: action.payload })),
);
