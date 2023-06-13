import { createAction, props } from "@ngrx/store";
import { Identity } from "../auth.types";


export const verifyIdentityActionStart = createAction(
    "[Identity] Verify Start"
)

export const verifyIdentityActionSuccess = createAction(
    "[Identity] Verify Success",
    props<{ payload: Identity }>()
)

export const verifyIdentityActionError = createAction(
    "[Identity] Verify Error",
    props<{ payload: string }>()
)

export const logoutIdentity = createAction(
    "[Identity] Logout"
)
