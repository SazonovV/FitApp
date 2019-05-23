import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../authentication/authentication.service';
import {User} from '../../interfaces/user';
import {DEFAULT} from '../config/url_default';
import {Exercise} from '../../interfaces/exercise';
import {Observable} from 'rxjs';
import {Apparatus} from '../../interfaces/apparatus';
import {Measure} from '../../interfaces/measure';

const url = DEFAULT.URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private user: User;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.user = this.authService.currentUserValue;

  }

  public getExercises(): Observable<Exercise[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Exercise[]>(`${url}exercises`, options);
  }
  public getExpandExercise(id: string): Observable<Exercise> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Exercise>(`${url}exercises/${id}`, options);
  }
  public getApparatus(id: string): Observable<Apparatus> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Apparatus>(`${url}apparatuses/${id}`, options);
  }
  public getMeasure(id: string): Observable<Measure> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Measure>(`${url}measureunits/${id}`, options);
  }
  public getMeasures(): Observable<Measure[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Measure[]>(`${url}measureunits`, options);
  }
  public getApparatuses(): Observable<Apparatus[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Apparatus[]>(`${url}apparatuses`, options);
  }
  public postExercise(exercise: Exercise): void {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };
    this.http.post(`${url}exercises`, exercise, options).subscribe();
  }
}
