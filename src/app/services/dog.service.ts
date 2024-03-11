import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private baseUrl = 'http://localhost:3000/dogs';

  constructor(private http: HttpClient) { }

  getDogListings(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createDogListing(formData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }
}