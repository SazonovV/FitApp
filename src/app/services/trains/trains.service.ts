import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Train} from '../../interfaces/train';
import {DEFAULT} from '../config/url_default';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication/authentication.service';
import {User} from '../../interfaces/user';
import {Exercise} from '../../interfaces/exercise';
import {Value} from '@angular/cli/models/interface';
import {tap} from 'rxjs/operators';

const url = DEFAULT.URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class TrainsService {
  private user: User;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.user = this.authService.currentUserValue;
  }

  public getTrainInfo(id: string): Observable<Train> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Train>(`${url}practices/${id}`, options);
  }
  public getTrains(): Observable<Train[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Train[]>(`${url}users/${this.user.id}/practices`, options);
  }
  public getExpandTrain(id: string): Observable<Exercise[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.get<Exercise[]>(`${url}practices/${id}/contain`, options);
  }
  public deleteExerciseFromTrain(trainId: string, exerciseId: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${this.user.token}`,
      }),
      body: {delete: exerciseId}
    };
    return this.http.delete(`${url}practices/${trainId}/deleteExercise`, options);
  }
  public postNewExerciseInTrain(trainId: string, exerciseId: string): Observable<any> {
    if (exerciseId === undefined) {
      return;
    }
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };

    return this.http.post(`${url}practices/${trainId}/addExercise`, {contain: exerciseId}, options);
  }
  public postNewTrain(nameTrain: string, dateTrain: Date, repeat: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };
    let dateIOS;
    if (dateTrain) {
      dateIOS = `${dateTrain.getFullYear()}-${dateTrain.getMonth() + 1}-${dateTrain.getDate()}T00:00:00Z`;
    } else {
      dateIOS = undefined;
    }
    return this.http.post(`${url}practices`,
      {status: true, name: nameTrain, owner: this.user.id, date: dateIOS, repeatAfter: repeat},
      options).pipe(tap((value: Train) => this.shareTrain(this.user.id, value.id)));
  }
  public shareTrain(userId: string, trainId: string): void {
    if (userId === undefined) {
      return;
    }
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`
      })
    };
    this.http.post(`${url}users/${userId}/addpractice`, {contain: trainId}, options).subscribe();
  }
}
