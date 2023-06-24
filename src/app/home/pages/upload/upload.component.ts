import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService } from '../../services/fileupload.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
})
export class UploadComponent {
    file: File = null;

    uploadForm: FormGroup = new FormGroup({
        'file': new FormControl('', { validators: [Validators.required]})
    });

    constructor(private fileUploadService: FileUploadService) {}

    onFileChange(event: Event) {
        const fileInput = event.target as HTMLInputElement;
        this.file = fileInput.files[0];
    }

    submit() {
        if (this.uploadForm.valid) {
            this.fileUploadService.uploadFile(this.file).subscribe({
                next: data => {
                    console.log(data);
                },
                error: err => {
                    console.log(err);
                }
            })
        }
    }
}
