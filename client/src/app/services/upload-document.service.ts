import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  uploadFile(formData) {
    return this.http.post(`${this.API_URI}/upload`, formData)
  }
}
