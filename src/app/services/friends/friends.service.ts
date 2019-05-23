import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../interfaces/user';
import {Observable, ReplaySubject} from 'rxjs';
import {AuthenticationService} from '../authentication/authentication.service';
import {DEFAULT} from '../config/url_default';

const url = DEFAULT.URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private usersList$ = new ReplaySubject<User[]>(1);
  private friendsList$ = new ReplaySubject<User[]>(1);
  private user: User;

  constructor(private http: HttpClient,
              private authService: AuthenticationService) {
    this.user = this.authService.currentUserValue;
  }

  get users$(): Observable<User[]> {
    return this.usersList$.asObservable();
  }
  get friends$(): Observable<User[]> {
    return   this.friendsList$.asObservable();
  }
  public getFriends(): void {
    this.http.get<User[]>(`${url}users/${this.user.id}/friends`,
      { headers: {Authorization: `Bearer ${this.user.token}`}})
      .subscribe((users: User[]) => this.friendsList$.next(users));
  }
  public addFriend(id: string): void {
    this.http.post(`${url}users/${this.user.id}/addfriend`, { makeFriend: id },
      { headers: {Authorization: `Bearer ${this.user.token}`}})
      .subscribe((users: User[]) => this.usersList$.next(users));
  }
  public deleteFriend(id: string): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${this.user.token}`,
      }),
      body: {delete: id}
    };
    this.http.delete(`${url}users/${this.user.id}/deletefriend`, options).subscribe(() => this.getFriends());
  }
  public getUsers(): void {
    this.http.get<User[]>(`${url}users`).subscribe((users: User[]) => this.usersList$.next(users));
  }
  public searchUsers(search: string): void {
    this.http.get<User[]>(`${url}users/search?email=${search}`,
      { headers: {Authorization: `Bearer ${this.user.token}`}})
      .subscribe((users: User[]) => this.usersList$.next(users));
  }
}
