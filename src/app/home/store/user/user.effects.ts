import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { User } from "../../models/user.models";
import { UserActions } from "./user.actions-types";
import { UserService } from "./user.service";


@Injectable()
export class UserEffects {

    userStart$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.GetUserStart),
        exhaustMap(() =>
            this.userService.getAccountDetails().pipe(
                map((user: User) => UserActions.GetUserSuccess({ user: user })),
                catchError(error => of(UserActions.GetUserError({ error: `Unable to get account details login: ${error}` })))
            )
        )
    ));

    userPatch$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.PatchUser),
        exhaustMap(action =>
            this.userService.patchAccount(action.user).pipe(
                map(() => UserActions.PatchUserSuccess()),
                catchError(error => of(UserActions.GetUserError({ error: `Unable to get account details login: ${error}` })))
            )
        )
    ));


    constructor(
        private userService: UserService,
        private actions$: Actions
    ) { }
}
