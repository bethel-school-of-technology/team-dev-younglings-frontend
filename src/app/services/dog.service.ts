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
    return this.http.get<Dog[]>(`${this.baseUrl}/`);
  }

  getDogs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createDogListing(formData: FormData): Observable<any> {
    console.log(formData);
    const token = localStorage.getItem('token');
    return this.http.post<any>(`${this.baseUrl}/post-listing`, formData, 
    {headers: {'Authorization': `Bearer ${token}`}}
    );
  }

  redirectToMyListings(): void {
    this.router.navigate(['/my-listings']);
  }

  getRandomDogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/random`);
  }

  getDogInfo(id: string): Observable<Dog> {
    return this.http.get<Dog>(`${this.baseUrl}/${id}`);
  }

  deleteDogListing(id: string): Observable<void> {
    const url = `${this.baseUrl}/delete/:id${id}`;
    return this.http.delete<void>(url);
  }

  editDogInfo(dog: Dog): Observable<void> {
    const url = `${this.baseUrl}/dogs/${dog.id}`;
    return this.http.put<void>(url, dog);
  }
}