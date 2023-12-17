import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { FileUplodResponseModel } from '../models/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  upload(file: Set<File>): Observable<FileUplodResponseModel> {
    const formData = new FormData();
    file.forEach((file) => formData.append('file', file, file.name));
    const request = new HttpRequest(
      'POST',
      `${this.apiUrl}/file-upload`,
      formData
    );
    return this.http.request(request).pipe(
      filter(
        (event): event is HttpResponse<any> => event instanceof HttpResponse
      ),
      map((event: HttpResponse<any>) => {
        return event.body;
      })
    );
  }
}
