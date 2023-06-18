import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        this.http.get<any>("/api/v2/user/info").subscribe({
            next: data => {
                this.router.navigate(["/home"]);
            },
            error: err => {
                window.location.href = `${environment.AUTH_SERVER}/login`;
            }
        });
    }
}
