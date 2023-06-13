import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>("identity");

export const identity = createSelector(
    selectAuthState,
    identity => identity.identity
);

export const isUserExist = createSelector(
    selectAuthState,
    identity => !!identity
);
