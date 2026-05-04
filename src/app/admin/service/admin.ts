import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../services/storage/user-storage';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class Admin {
  constructor(private http: HttpClient) {}

  private createAuthorizationHeader(): HttpHeaders {
    let token = UserStorageService.getToken();

    if (!token) return new HttpHeaders();

    token = token.replace('Bearer ', '').trim();

    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  addCategory(categoryDto: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/category', categoryDto, {
      headers: this.createAuthorizationHeader(),
    });
  }
}
