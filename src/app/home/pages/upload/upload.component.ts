import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularDropzoneAPI } from 'angular-dropzone';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
})
export class UploadComponent {
    uploadApi = new AngularDropzoneAPI('/api/v2/files/upload', 'POST');

}