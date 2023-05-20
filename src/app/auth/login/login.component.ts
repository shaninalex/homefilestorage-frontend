import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    auth_url: string = `${environment.AUTH_SERVER_LOGIN}/login`;

    constructor(
        private store: Store<AuthState>,
        private authService: AuthService
    ) {
        this.checkCookie();
    }

    checkCookie() {
        this.authService.verify_identity().subscribe({
            next: data => {
                console.log(data);
            }
        })
    }
}
