import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DecisionTreeService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getTree(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tree`);
  }

  uploadRules(file: File): Observable<any> {
    return this.http.post(`${this.apiUrl}/file`, file);
  }
}
