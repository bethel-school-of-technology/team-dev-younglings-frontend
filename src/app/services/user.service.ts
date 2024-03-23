import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/login`, credentials);
  }

  redirectToWelcome(): void {
    this.router.navigate(['/welcome']);
  }
}