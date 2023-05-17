import { createReducer } from "@ngrx/store";
import { LoginSuccessPayload } from "../auth.types";
import { AuthActions } from "./auth.action-types";
import { on } from "@ngrx/store";

export interface AuthState {
    loggedin?: boolean
    error?: string
    loading: boolean
};


export const initialState: AuthState = {
    loggedin: false,
    error: undefined,
    loading: false
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.authLoginStartAction, (state, action) => ({ ...state, loading: true })),
    on(AuthActions.authRegisterStartAction, (state, action) => ({ ...state, loading: true })),
    on(AuthActions.authLoginErrorAction, (state, action) => ({ loading: false, error: action.payload, loggedin: false })),
    on(AuthActions.authLoginSuccessAction, (state, action) => ({ loading: false, error: undefined, loggedin: true })),
    on(AuthActions.authLogoutAction, (state, action) => (initialState))
);
