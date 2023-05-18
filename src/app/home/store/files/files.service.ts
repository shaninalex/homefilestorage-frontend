import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User } from "../../models/user.models";
import { StorageFile } from "../../models/files.models";


@Injectable()
export class FilesService {
    constructor(
        private http: HttpClient
    ) { }

    getFilesList(folder_id: number = 0): Observable<{ "files": StorageFile[] }> {
        const query_params = new HttpParams()
        query_params.append("folder_id", folder_id);
        return this.http.get<{ "files": StorageFile[] }>("/api/v2/files", { params: query_params }).pipe(
            shareReplay()
        )
    }
}