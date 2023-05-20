import { createSelector } from '@ngrx/store';
import { selectState } from '../selectors';


export const selectFilesState = createSelector(
    selectState,
    state => state.files
);

export const selectFiles = createSelector(
    selectFilesState,
    filesState => filesState.files
);
