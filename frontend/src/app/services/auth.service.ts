import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

const KEY = 'authtoken';
const API_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private userService: UserService) {

  }
  ''

  login(user) {

    console.log(user);

    return this.http.post(API_URL + '/auth/login', user)
      .pipe(tap((res) => {
        const authToken = res['token'];
        this.userService.setToken(authToken);

      }));
  }



}
