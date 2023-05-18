import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.models';
import { getUserSelector } from '../../store/user/user.selectors';
import { Store, select } from '@ngrx/store';
import { UserState } from '../../store/user/user.reducer';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    user$: Observable<User> = of(<User>{});

    constructor(private store: Store<UserState>) { }

    ngOnInit(): void {
        this.user$ = this.store.pipe(select(getUserSelector));
    }
}
