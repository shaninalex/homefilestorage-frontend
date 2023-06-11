import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    verify_identity(): Observable<any> {
        return this.http.get<any>("/api/v2/user/info").pipe(
            shareReplay()
        );
    }
}