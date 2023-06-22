import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../../services/file-upload.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
})
export class UploadComponent implements OnInit {
    uploadForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private uploadService: UploadService
    ) { }

    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
            file: [null]
        });
    }

    onFileChange(files: FileList) {
        if (files.length > 0) {
            this.uploadForm.patchValue({ file: files[0] });
        }
    }

    uploadFile() {
        const file = this.uploadForm.get('file').value;
        if (file) {
            this.uploadService.uploadFile(file).subscribe(
                response => {
                    console.log('File uploaded successfully');
                },
                error => {
                    console.error('Failed to upload file:', error);
                }
            );
        }
    }
}