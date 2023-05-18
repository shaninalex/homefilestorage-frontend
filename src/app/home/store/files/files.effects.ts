import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { FilesActions } from "./files.actions-types";
import { StorageFile } from "../../models/files.models";
import { FilesService } from "./files.service";


@Injectable()
export class FilesEffects {

    filesStart$ = createEffect(() => this.actions$.pipe(
        ofType(FilesActions.GetFilesStart),
        exhaustMap(action =>
            this.filesService.getFilesList(action.folder_id).pipe(
                map(response => FilesActions.GetFilesSuccess({ files: response.files })),
                catchError(error => of(FilesActions.GetFilesError({ error: "Unable to get user files." })))
            )
        )
    ));

    constructor(
        private filesService: FilesService,
        private actions$: Actions
    ) { }
}
