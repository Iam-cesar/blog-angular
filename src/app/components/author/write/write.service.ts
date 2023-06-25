import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/infra/api';

@Injectable({
  providedIn: 'root',
})
export class WriteService {
  private API = baseURL;

  constructor(private http: HttpClient) {}

  public createPost(
    writeData: Partial<{
      title: string | null;
      content: string | null;
    }>
  ): Observable<Partial<PostEntity>> | undefined {
    try {
      return this.http.post(`${this.API}/post`, writeData);
    } catch (error) {
      return undefined;
    }
  }
}
