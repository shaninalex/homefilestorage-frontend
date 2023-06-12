import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Identity } from "./auth.types";


@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    verify_identity(): Observable<Identity> {
        return this.http.get<Identity>("/api/v2/user/info").pipe(
            shareReplay()
        );
    }
}