import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private baseUrl = 'http://localhost:3000/api/dogs';

  constructor(private http: HttpClient, private router: Router) { }

  getDogListings(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.baseUrl);
  }

  getDogs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createDogListing(formData: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }

  redirectToMyListings(): void {
    this.router.navigate(['/my-listings']);
  }

  getRandomDogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/random`);
  }
}