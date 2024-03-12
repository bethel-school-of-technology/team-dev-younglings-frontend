import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private baseUrl = 'http://localhost:4000/dogs';

  constructor(private http: HttpClient, private router: Router) { }

  getDogListings(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createDogListing(formData: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }

  redirectToMyListings(): void {
    this.router.navigate(['/my-listings']);
  }
}