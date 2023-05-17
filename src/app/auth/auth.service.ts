import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of, shareReplay } from "rxjs";
import { LoginPayload, LoginSuccessPayload, RegisterPayload, RegisterSuccessPayload } from "./auth.types";
import { AuthState } from "./store/auth.reducer";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AuthService {
    constructor(
        private store: Store<AuthState>,
        private http: HttpClient
    ) { }

    login(payload: LoginPayload): Observable<LoginSuccessPayload> {
        return this.http.post<LoginSuccessPayload>("/api/v2/login", payload).pipe(
            shareReplay()
        );
    }

    register(payload: RegisterPayload): Observable<RegisterSuccessPayload> {
        return this.http.post<RegisterSuccessPayload>("/api/v2/register", payload).pipe(
            shareReplay()
        );
    }
}