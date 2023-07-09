import { createReducer } from "@ngrx/store";
import { StorageFile } from "../../models/files.models";
import { FilesActions } from "./files.actions-types";
import { on } from "@ngrx/store";


export interface FilesState {
    files: StorageFile[]
    error?: string
    loading: boolean
}

export const initialState: FilesState = {
    files: [],
    error: undefined,
    loading: false
};

export const filesReducer = createReducer(
    initialState,
    // get
    on(FilesActions.GetFilesStart, (state) => ({ ...state, loading: true })),
    on(FilesActions.GetFilesError, (state, action) => ({ ...state, loading: false, error: action.error })),
    on(FilesActions.GetFilesSuccess, (state, action) => ({ ...state, loading: false, error: undefined, files: [...initialState.files, ...action.files]})),
    
    // uploading
    on(FilesActions.SaveFileStart, (state, action) => ({ ...state, loading: true, error: undefined})),
    on(FilesActions.SaveFileError, (state, action) => ({ ...state, loading: false, error: action.error})),
    on(FilesActions.SaveFileSuccess, (state, action) => ({ ...state, loading: false, error: undefined, files: [action.file, ...state.files]}))
);
