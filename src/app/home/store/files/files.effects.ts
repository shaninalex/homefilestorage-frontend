import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { FilesActions } from "./files.actions-types";
import { FilesService } from "./files.service";
import { Router } from "@angular/router";


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

    fileUpload$ = createEffect(() => this.actions$.pipe(
        ofType(FilesActions.SaveFileStart),
        exhaustMap(action =>
            this.filesService.uploadFile(action.file).pipe(
                map(response => FilesActions.SaveFileSuccess({file: response})),
                catchError(error => of(FilesActions.SaveFileError({error: `Unable to save file: ${error}`})))
            )
        )
    ));

    redirectOnFilesAfterSuccessUploading$ = createEffect(() => this.actions$.pipe(
        ofType(FilesActions.SaveFileSuccess),
        tap(() => {
            this.router.navigate(["/home"]);
        })
    ), { dispatch: false});

    constructor(
        private filesService: FilesService,
        private router: Router,
        private actions$: Actions
    ) { }
}
