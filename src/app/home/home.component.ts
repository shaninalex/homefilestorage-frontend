import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';
import { GetUserStart } from './store/user/user.actions';
import { GetFilesStart } from './store/files/files.actions';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.store.dispatch(GetUserStart());
        this.store.dispatch(GetFilesStart({ folder_id: 0 }));
    }
}
