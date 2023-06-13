import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { StorageFile } from "../../models/files.models";


@Injectable()
export class FilesService {
    constructor(
        private http: HttpClient
    ) { }

    getFilesList(folder_id = 0): Observable<{ "files": StorageFile[] }> {
        const query_params = new HttpParams();
        query_params.append("folder_id", folder_id);
        return this.http.get<{ "files": StorageFile[] }>("/api/v2/files/list", { params: query_params }).pipe(
            shareReplay()
        )
    }
}