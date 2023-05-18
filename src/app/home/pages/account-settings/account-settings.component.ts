import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../models/user.models';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user/user.reducer';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent {
    accountForm: FormGroup = new FormGroup({
        'email': new FormControl("", [Validators.required, Validators.email]),
        'username': new FormControl("", [Validators.required, Validators.minLength(5)]),
    });

    user: Observable<User>;

    constructor(private store: Store<UserState>) {

    }

    Submit() {
        if (this.accountForm.valid) {
            console.log(this.accountForm.value);
        }
    }
}
