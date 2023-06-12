import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';
import { AuthActions } from '../store/auth.action-types';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(private store: Store<AuthState>) {
        this.store.dispatch(AuthActions.verifyIdentityActionStart());
    }
}
