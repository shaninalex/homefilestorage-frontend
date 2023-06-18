import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { UserService } from "./user.service";
import { UserActions } from "./user.actions-types";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";


@Injectable()
export class UserEffects {

    authStart$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.verifyIdentityActionStart),
        exhaustMap(() =>
            this.userService.verify_identity().pipe(
                map(identity => UserActions.verifyIdentityActionSuccess({ payload: identity })),
                catchError(error => of(UserActions.verifyIdentityActionError({ payload: error })))
            )
        )
    ));

    authError$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.verifyIdentityActionError),
        tap(() => {
            window.location.href = `${environment.AUTH_SERVER}/login`;
        })
    ), { dispatch: false });

    authSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.verifyIdentityActionSuccess),
        tap(() => this.router.navigate(['/home']))
    ), { dispatch: false });

    authLogout$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.logoutIdentity),
        tap(() => {
            window.location.href = `${environment.AUTH_SERVER}/self-service/logout`;
        })
    ), { dispatch: false })

    constructor(
        private userService: UserService,
        private actions$: Actions,
        private router: Router
    ) { }
}
