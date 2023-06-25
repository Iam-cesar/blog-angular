import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/infra/api';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  private API = baseURL;

  public getPost(id: string | null): Observable<PostEntity> | undefined {
    try {
      if (!id) return undefined;

      return this.http.get<PostEntity>(`${this.API}/post/${id}`);
    } catch (error) {
      return undefined;
    }
  }
}
