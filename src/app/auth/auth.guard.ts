import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthState } from "./store/auth.reducer";
import { isUserExist } from './store/auth.selectors';


@Injectable({
      providedIn: 'root'
})
class AuthGuardService {

    constructor(private store: Store<AuthState>,
        private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isUserExist),
            tap(identity => {
                if (!identity) {
                    this.route.navigateByUrl("/auth");
                }
            })
        )
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
    return inject(AuthGuardService).canActivate(next, state);
}
