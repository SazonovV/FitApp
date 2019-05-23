import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication/authentication.service';

const url = 'https://shielded-chamber-25933.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly user: User;

  constructor(private http: HttpClient,
              private authService: AuthenticationService) {
    this.user = authService.currentUserValue;
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${url}users/${this.user.id}`,
      { headers: {Authorization: `Bearer ${this.user.token}`}});
  }
  updateUserInfo(userInfo: User): Observable<any> {
    return this.http.patch(`${url}users/${this.user.id}`, userInfo,
      { headers: {Authorization: `Bearer ${this.user.token}`}});
  }
}
