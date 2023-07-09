import { createAction, props } from "@ngrx/store";
import { StorageFile } from "../../models/files.models";


export const GetFilesStart = createAction(
    "[Files] Files Start",
    props<{ folder_id: number }>()
);

export const GetFilesSuccess = createAction(
    "[Files] Files Success",
    props<{ files: StorageFile[] }>()
);

export const GetFilesError = createAction(
    "[Files] Files Error",
    props<{ error: string }>()
);

export const SaveFileStart = createAction(
    "[Files] Save File Start",
    props<{ file: File }>()
);

export const SaveFileSuccess = createAction(
    "[Files] Save File Success",
    props<{ file: StorageFile }>()
);

export const SaveFileError = createAction(
    "[Files] Save File Error",
    props<{ error: string }>()
);
