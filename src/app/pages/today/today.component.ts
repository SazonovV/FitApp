import {Component, OnInit} from '@angular/core';
import {TodayService} from '../../services/today/today.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.less'],
})
export class TodayComponent implements OnInit {
  private trainList$: Observable<any>;
  private todayDate = new Date();
  public displayedColumns: string[] = ['number', 'name', 'num_rep', 'num_try'];

  constructor(private todayService: TodayService,
              private router: Router) { }

  ngOnInit() {
    this.todayService.getTodayTrainPlan();
    this.trainList$ = this.todayService.trainList$;
  }

  onOpenExercise(exerciseId: string) {
    this.router.navigate([ 'exercises/expand', {id: exerciseId}]);
  }
}
