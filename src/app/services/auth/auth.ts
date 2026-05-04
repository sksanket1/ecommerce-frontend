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

  login(username: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.Http.post(
      BASIC_URL + 'authenticate',
      { username, password },
      { headers, observe: 'response' },
    ).pipe(
      map((response: any) => {
        // 🔥 TOKEN FROM HEADER
        let authHeader = response.headers.get('Authorization');

        if (!authHeader) {
          throw new Error('No token received');
        }

        // safety cleanup
        authHeader = authHeader.replace('Bearer ', '').trim();

        this.userStorageService.saveToken(authHeader);

        // 🔥 USER FROM BODY
        const user = response.body;

        if (!user) {
          throw new Error('No user received');
        }

        this.userStorageService.saveUser(user);

        return { token: authHeader, user };
      }),
    );
  }
}
