import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class FileUploadService {
    private socket: WebSocket;

    uploadFile(file: File): Observable<number> {
        this.socket = new WebSocket(environment.FILE_UPLOADER_SOCKET);

        const chunkSize = 1024 * 1024;
        const totalChunks = Math.ceil(file.size / chunkSize);
        let currentChunk = 0;

        return new Observable<number>(observer => {
            this.socket.onopen = () => {
                const reader = new FileReader();

                reader.onload = () => {
                    if (reader.readyState === 2) {
                        this.socket.send(reader.result as ArrayBuffer);
                        currentChunk++;

                        if (currentChunk < totalChunks) {
                            const start = currentChunk * chunkSize;
                            const end = Math.min(start + chunkSize, file.size);
                            const chunk = file.slice(start, end);
                            reader.readAsArrayBuffer(chunk);
                        } else {
                            this.socket.close();
                            observer.complete();
                        }
                    }
                };

                const start = currentChunk * chunkSize;
                const end = Math.min(start + chunkSize, file.size);
                const chunk = file.slice(start, end);
                reader.readAsArrayBuffer(chunk);
            };

            this.socket.onmessage = (event) => {
                const progress = JSON.parse(event.data).progress;
                observer.next(progress);
            };

            this.socket.onerror = (error) => {
                observer.error(error);
            };
        });
    }
}
