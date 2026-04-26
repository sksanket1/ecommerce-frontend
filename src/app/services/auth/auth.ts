import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStorageService } from '../storage/user-storage';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(
    private Http: HttpClient,
    private userStorageService: UserStorageService,
  ) {}

  register(signupRequest: any): Observable<any> {
    return this.Http.post(BASIC_URL + 'sign-up', signupRequest);
  }

  login(username: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username, password };
    return this.Http.post(BASIC_URL + 'authenticate', body, { headers, observe: 'response' }).pipe(
      map((response: any) => {
        const token = response.headers.get('Authorization').substring(7);
        const user = response.body;
        if (token && user) {
          this.userStorageService.saveToken(token);
          this.userStorageService.saveUser(user);
          return true;
        }
        return false;
      }),
    );
  }
}
