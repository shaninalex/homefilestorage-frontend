import { createReducer } from "@ngrx/store";
import { StorageFile } from "../../models/files.models";
import { FilesActions } from "./files.actions-types";
import { on } from "@ngrx/store";


export interface FilesState {
    files: StorageFile[]
    error?: string
    loading: boolean
};


export const initialState: FilesState = {
    files: [],
    error: undefined,
    loading: false
};

export const filesReducer = createReducer(
    initialState,
    on(FilesActions.GetFilesStart, (state, action) => ({ ...state, loading: true })),
    on(FilesActions.GetFilesError, (state, action) => ({ ...state, loading: false, error: action.error })),
    on(FilesActions.GetFilesSuccess, (state, action) => ({ loading: false, error: undefined, files: [...initialState.files, ...action.files] })),
);
