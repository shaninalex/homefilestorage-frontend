import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { FilesActions } from "./files.actions-types";
import { FilesService } from "./files.service";


@Injectable()
export class FilesEffects {

    filesStart$ = createEffect(() => this.actions$.pipe(
        ofType(FilesActions.GetFilesStart),
        exhaustMap(action =>
            this.filesService.getFilesList(action.folder_id).pipe(
                map(response => {
                    if (response.files) {
                        return FilesActions.GetFilesSuccess({ files: response.files })
                    } else {
                        return FilesActions.GetFilesError({ error: `No files found` });
                    }
                }),
                catchError(error => of(FilesActions.GetFilesError({ error: `Unable to get user files: ${error}` })))
            )
        )
    ));

    constructor(
        private filesService: FilesService,
        private actions$: Actions
    ) { }
}
