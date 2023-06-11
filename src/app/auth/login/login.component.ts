import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(
        private store: Store<AuthState>,
        private authService: AuthService
    ) {
        const data = this.authService.verify_identity();
        data.subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (err) => {
                if (err.status == 401) {
                    window.location.href = "http://127.0.0.1:4455/login"
                }
            }
        })
        // TODO: Save data to store
    }
}
