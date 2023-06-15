import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { logoutIdentity } from '../../store/user/user.actions';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

    constructor(private store: Store<AppState>) { }

    logout(): void {
        this.store.dispatch(logoutIdentity());
    }
}
