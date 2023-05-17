import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "../auth.service";
import { LoginSuccessPayload, RegisterSuccessPayload } from "../auth.types";
import { AuthActions } from "./auth.action-types";

@Injectable()
export class AuthEffects {

    authStart$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.authLoginStartAction),
        exhaustMap(action =>
            this.authService.login(action.payload).pipe(
                map(access => AuthActions.authLoginSuccessAction({ payload: <LoginSuccessPayload>access })),
                catchError(error => of(AuthActions.authLoginErrorAction({ payload: "Unable to login." })))
            )
        )
    ));

    authSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.authLoginSuccessAction),
        tap(result => {
            localStorage.setItem("access_token", result.payload.access_token);
            localStorage.setItem("refresh_token", result.payload.refresh_token);
            localStorage.setItem("exp", String(result.payload.exp));
            this.router.navigate(['/app']);
        })
    ), { dispatch: false});

    registerStart$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.authRegisterStartAction),
        exhaustMap(action =>
            this.authService.register(action.payload).pipe(
                map(() => AuthActions.authRegisterSuccessAction()),
                catchError(error => of(AuthActions.authRegisterErrorAction({ payload: error })))
            )
        )
    ));

    registerSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.authRegisterSuccessAction),
        tap(result => {
            // redirect to login page
            this.router.navigate(['/auth']);
        })
    ), { dispatch: false});

    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router
    ) { }
}
