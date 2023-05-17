import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';
import { authLoginStartAction } from '../store/auth.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    error: boolean = false;

    loginForm: FormGroup = new FormGroup({
        'email': new FormControl("", [Validators.required, Validators.email]),
        'password': new FormControl("", [Validators.required, Validators.minLength(5)]),
    });

    constructor(private store: Store<AuthState>) { }

    Submit(): void {
        if (this.loginForm.valid) {
            this.store.dispatch(authLoginStartAction({ payload: { ...this.loginForm.value } }));
        }
    }
}
