import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User, Identity } from "../../models/user.models";


@Injectable()
export class UserService {
    constructor(
        private http: HttpClient
    ) { }

    getAccountDetails(): Observable<User> {
        return this.http.get<User>("/api/v2/account").pipe(
            shareReplay()
        )
    }

    patchAccount(user: User): Observable<User> {
        return this.http.patch<User>("/api/v2/account", user).pipe(
            shareReplay()
        );
    }

    verify_identity(): Observable<Identity> {
        return this.http.get<Identity>("/api/v2/user/info").pipe(
            shareReplay()
        );
    }
}
