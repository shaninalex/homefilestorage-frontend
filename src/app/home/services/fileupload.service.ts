import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class FileUploadService {
    private uploadUrl = "/api/v2/files/upload";

    constructor(private http: HttpClient) {}

    uploadFile(file: File): Observable<any> {
        const filename: string = encodeURIComponent(file.name);
        const headers = new HttpHeaders({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename="${filename}"`
        });

        return this.http.post(this.uploadUrl, file, {
            headers: headers,
            reportProgress: true
        });
    }
}
