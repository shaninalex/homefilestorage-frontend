import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FilesState } from '../../store/files/files.reducer';
import { StorageFile } from '../../models/files.models';
import { selectFiles } from '../../store/files/files.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-file-list',
    templateUrl: './file-list.component.html'
})
export class FileListComponent {

    files: Observable<StorageFile[]>;

    constructor(private store: Store<FilesState>) {
        this.files = this.store.pipe(select(selectFiles));
    }

}
