import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../../interfaces/user';
import { UserLoginAnswer } from '../../interfaces/user-login-answer';
import { Login } from '../../interfaces/login';
import {Register} from '../../interfaces/register';
import {Router} from '@angular/router';
import {DEFAULT} from '../config/url_default';

const url = DEFAULT.URL_BASE;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private user: User = {
    token: '',
    id: '',
    firstName: '',
    secondName: '',
    email: '',
    image: '',
  };

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(login: Login, returnUrl: string) {
    return this.http.post<UserLoginAnswer>(`${url}users/login`, '', { headers: {
        Authorization: 'Basic ' + btoa(`${login.email}:${login.password}`),
      }})
      .pipe(tap(user => {
        if (user && user.token) {
          this.user.id = user.userId;
          this.user.token = user.token;
        }

        return this.http.get<User>(`${url}users/${this.user.id}`,
          { headers: {Authorization: `Bearer ${this.user.token}`}})
          .subscribe(value => {
            this.user.firstName = value.firstName;
            this.user.secondName = value.secondName;
            this.user.email = value.email;
            this.user.image = value.image;
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.currentUserSubject.next(this.user);
            this.router.navigate([returnUrl]);
          });
      }));
  }

  logout(): void {
    // remove user from local storage to log user out
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/start']);
  }

  register(register: Register): Observable<Register> {
    return this.http.post<Register>(`${url}users`, register);
  }
}
