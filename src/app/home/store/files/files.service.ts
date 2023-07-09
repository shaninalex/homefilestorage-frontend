import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { StorageFile } from "../../models/files.models";


@Injectable()
export class FilesService {

    private uploadUrl = "/api/v2/files/upload";

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

    uploadFile(file: File): Observable<StorageFile> {
        const filename: string = encodeURIComponent(file.name);
        const headers = new HttpHeaders({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename="${filename}"`
        });

        return this.http.post<StorageFile>(this.uploadUrl, file, {
            headers: headers,
            reportProgress: true
        });
    }
}
