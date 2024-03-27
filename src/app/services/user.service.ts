import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = false;
  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any): Observable<any> {
    console.log(user);
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    console.log(credentials)
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  redirectToWelcome(): void {
    this.router.navigate(['/welcome']);
  }

  getUser(id: string): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    sessionStorage.clear();
    this.loggedIn = false;
  }
}