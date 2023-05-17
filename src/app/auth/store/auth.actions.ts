import { createAction, props } from "@ngrx/store";
import { LoginPayload, LoginSuccessPayload, RegisterPayload } from "../auth.types";


export const authLoginStartAction = createAction(
    "[Auth] Login Start",
    props<{payload: LoginPayload}>()
);

export const authLoginErrorAction = createAction(
    "[Auth] Login Error",
    props<{payload: string}>()
);

export const authLoginSuccessAction = createAction(
    "[Auth] Login Success",
    props<{payload: LoginSuccessPayload}>()
);

export const authRegisterStartAction = createAction(
    "[Auth] Register Start",
    props<{payload: RegisterPayload}>()
);

export const authRegisterErrorAction = createAction(
    "[Auth] Register Error",
    props<{payload: Error}>()
);

export const authRegisterSuccessAction = createAction(
    "[Auth] Register Success"
);

export const authLogoutAction = createAction(
    "[Auth] Logout"
);
