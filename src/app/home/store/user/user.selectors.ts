import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectAuthState = createFeatureSelector<UserState>("auth");

export const identity = createSelector(
    selectAuthState,
    identity => identity.identity
);
