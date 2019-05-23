import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';
import {Train} from '../../interfaces/train';
import {AuthenticationService} from '../authentication/authentication.service';
import {User} from '../../interfaces/user';
import {TrainsService} from '../trains/trains.service';

const url = 'https://shielded-chamber-25933.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class TodayService {
  private user: User;
  private ttrainList$ = new ReplaySubject<any>(1);

  constructor(private http: HttpClient,
              private trainsService: TrainsService,
              private authService: AuthenticationService) {
  this.user = authService.currentUserValue;
  }

  public get trainList$(): Observable<any> {
    return this.ttrainList$.asObservable();
  }

  public getTodayTrainPlan(): void {
    this.http.get<any>(`${url}users/${this.user.id}/todayPractices`,
      { headers: {Authorization: `Bearer ${this.user.token}`}})
      .subscribe(data => {
          data.forEach((item) => {
            this.trainsService.getExpandTrain(item.id).subscribe(value => item.exercises = value);
            return item;
          });
          this.ttrainList$.next(data);
    });
  }
}
