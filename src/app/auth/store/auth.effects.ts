import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "../auth.service";
import { AuthActions } from "./auth.action-types";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    authStart$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.verifyIdentityActionStart),
        exhaustMap(() =>
            this.authService.verify_identity().pipe(
                map(identity => AuthActions.verifyIdentityActionSuccess({ payload: identity })),
                catchError(error => of(AuthActions.verifyIdentityActionError({ payload: error })))
            )
        )
    ));

    authError$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.verifyIdentityActionError),
        tap(() => this.router.navigate())
    ), { dispatch: false });

    authSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.verifyIdentityActionSuccess),
        tap(() => this.router.navigate(['/home']))
    ), { dispatch: false });

    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router
    ) { }
}
