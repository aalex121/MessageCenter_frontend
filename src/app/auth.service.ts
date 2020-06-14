import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login-model';
import { AuthResponse } from './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: AuthResponse;

  private readonly currentUserStorageKey = 'currentUser';

  constructor(private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem(this.currentUserStorageKey));
  }

  private httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
      'Access-Control-Allow-Origin': '*'})
  };

  private jwtTokenUrl = "https://localhost:44321/token";

  requestJwtToken(userData: LoginModel): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.jwtTokenUrl, userData);
  }

  handleLogin(user: AuthResponse): void {
    localStorage.setItem(this.currentUserStorageKey, JSON.stringify(user));
    this.currentUser = user;
  }

  handleLogout(): void {
    localStorage.removeItem(this.currentUserStorageKey);
    this.currentUser = undefined;
  }

}
