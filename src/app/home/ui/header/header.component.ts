import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.models';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    user$: Observable<User> = of(<User>{});

    constructor(
        // private store: Store<UserState>
    ) { }

    ngOnInit(): void {
        // this.user$ = this.store.pipe(select(getUserSelector));
    }
}
