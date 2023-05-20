import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of, share, shareReplay } from "rxjs";
import { LoginPayload, LoginSuccessPayload, RegisterPayload, RegisterSuccessPayload } from "./auth.types";
import { AuthState } from "./store/auth.reducer";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable()
export class AuthService {
    constructor(
        private store: Store<AuthState>,
        private http: HttpClient
    ) { }

    verify_identity(): Observable<any> {
        return this.http.get<any>("/api/v2/verify").pipe(
            shareReplay()
        );
    }
}