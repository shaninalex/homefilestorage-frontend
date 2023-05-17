import { createAction, props } from "@ngrx/store";
import { StorageFile } from "../../models/files.models";


export const GetFilesStart = createAction(
    "[Files] Files Start",
    props<{ folder_id: number | null }>()
);

export const GetFilesSuccess = createAction(
    "[Files] Files Success",
    props<{ files: StorageFile[] }>()
);

export const GetFilesError = createAction(
    "[Files] Files Error",
    props<{ error: string }>()
);
