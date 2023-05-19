import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from '../../models/user.models';
import { Store, select } from '@ngrx/store';
import { UserState } from '../../store/user/user.reducer';
import { getUserSelector } from '../../store/user/user.selectors';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent {
    accountForm: FormGroup = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        username: new FormControl("", [Validators.required, Validators.minLength(5)]),
    });

    constructor(private store: Store<UserState>) {
        this.store.pipe(select(getUserSelector)).subscribe({
            next: data => {
                if (data) {
                    this.accountForm.controls["email"].setValue(data.email);
                    this.accountForm.controls["username"].setValue(data.username);
                }
            }
        });
    }

    Submit() {
        if (this.accountForm.valid) {
            console.log(this.accountForm.value);
        }
    }
}
