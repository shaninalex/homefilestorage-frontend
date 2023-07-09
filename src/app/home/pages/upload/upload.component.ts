import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FilesState } from '../../store/files/files.reducer';
import { FilesActions } from '../../store/files/files.actions-types';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
})
export class UploadComponent {
    file: File = null;

    uploadForm: FormGroup = new FormGroup({
        'file': new FormControl('', { validators: [Validators.required]})
    });

    constructor(private store: Store<FilesState>) {
    }

    onFileChange(event: Event) {
        const fileInput = event.target as HTMLInputElement;
        this.file = fileInput.files[0];
    }

    submit() {
        if (this.uploadForm.valid) {
            this.store.dispatch(FilesActions.SaveFileStart({file: this.file}));
        }
    }
}
