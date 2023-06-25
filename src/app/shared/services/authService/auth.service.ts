import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { Observable } from 'rxjs';
import jwt_decode, { JwtPayload } from 'jwt-decode';

import { baseURL } from 'src/infra/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private API = baseURL;

  public signIn(
    signInData: Partial<{
      email: string | null;
      password: string | null;
    }>
  ): Observable<{ accessToken: string }> | undefined {
    try {
      return this.http.post<{ accessToken: string }>(
        `${this.API}/auth/signin`,
        signInData
      );
    } catch (error) {
      return undefined;
    }
  }

  public signUp(
    signUpData: Partial<{
      firstName: string | null;
      lastName: string | null;
      email: string | null;
      password: string | null;
    }>
  ): Observable<{ accessToken: string }> | undefined {
    try {
      return this.http.post<{ accessToken: string }>(
        `${this.API}/auth/signup`,
        signUpData
      );
    } catch (error) {
      return undefined;
    }
  }

  public setSession(authResult: { accessToken: string }) {
    const { exp } = jwt_decode(authResult.accessToken) as JwtPayload;

    localStorage.setItem('id_token', authResult.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(exp));
  }

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    if (localStorage.getItem('id_token')) {
      moment().isBefore(this.getExpiration());
      return true;
    }

    return false;
  }

  public getExpiration() {
    const expiration = localStorage.getItem('expires_at') || '';
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public getToken() {
    if (!this.isLoggedIn()) {
      this.router.navigateByUrl('auth/signin');
    }

    return localStorage.getItem('id_token');
  }
}
