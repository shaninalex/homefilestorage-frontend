import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
    selector: "#upload",
    templateUrl: './upload.component.html'
})
export class UploadComponent {
    uploadForm: FormGroup = new FormGroup({
        'file': new FormControl("", [Validators.required]),
    });

    constructor(private uploadService: FileUploadService) {}

    Submit(): void {
        if (this.uploadForm.valid) {
            this.uploadService.uploadFile(this.uploadForm.value['file']).subscribe({
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
