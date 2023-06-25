import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/infra/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrowseService {
  private readonly API = baseURL;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostEntity[]> | undefined {
    try {
      return this.http.get<PostEntity[]>(`${this.API}/post`);
    } catch (error) {
      return undefined;
    }
  }
}
