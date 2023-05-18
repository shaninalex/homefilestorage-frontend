import { createSelector } from "@ngrx/store";
import { selectState } from "../selectors";

export const selectUserState = createSelector(
    selectState,
    state => state.user
)

export const getUserSelector = createSelector(
    selectUserState,
    _userstate => _userstate.user
);
