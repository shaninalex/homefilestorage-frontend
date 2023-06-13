import { createReducer } from "@ngrx/store";
import { Identity } from "../auth.types";
import { AuthActions } from "./auth.action-types";
import { on } from "@ngrx/store";

export interface AuthState {
    identity?: Identity
    error?: string
    loading: boolean
}

export const initialState: AuthState = {
    identity: undefined,
    error: undefined,
    loading: false
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.verifyIdentityActionStart, (state) => ({ ...state, loading: true })),
    on(AuthActions.verifyIdentityActionSuccess, (state, action) => ({ ...state, loading: false, error: undefined, identity: action.payload })),
    on(AuthActions.verifyIdentityActionError, (state, action) => ({ ...state, loading: false, error: action.payload })),
);
