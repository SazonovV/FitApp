import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExercisesService} from '../../../services/exercises/exercises.service';
import {Exercise} from '../../../interfaces/exercise';
import {tap} from 'rxjs/operators';
import {Apparatus} from '../../../interfaces/apparatus';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.less']
})
export class ExercisePageComponent implements OnInit {
  public exercise: Exercise;
  public apparatus: Apparatus;
  public measure: string;

  constructor(private route: ActivatedRoute, private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(param => this.exercisesService.getExpandExercise(param.id)
        .pipe(tap((data: Exercise) => {
          this.exercisesService.getApparatus(data.apparatusId)
            .subscribe((app: Apparatus) => this.apparatus = app);
          this.exercisesService.getMeasure(data.measure_unitId)
            .subscribe((value => this.measure = value.name));
        }))
        .subscribe((exer: Exercise) => this.exercise = exer));
  }

}
