import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ExercisesService} from '../../../services/exercises/exercises.service';
import {Apparatus} from '../../../interfaces/apparatus';
import {Measure} from '../../../interfaces/measure';
import {Exercise} from '../../../interfaces/exercise';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.less']
})
export class NewExerciseComponent implements OnInit {
  public measures: Measure[];
  public apparatuses: Apparatus[];
  public exercise: Exercise = {
    num_measure: null,
    name: '',
    num_rep: null,
    id: '',
    status: true,
    apparatusId: '',
    num_try: null,
    measure_unitId: '',
  };
  constructor(public dialogRef: MatDialogRef<NewExerciseComponent>,
              private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.exercisesService.getApparatuses().subscribe(value => this.apparatuses = value);
    this.exercisesService.getMeasures().subscribe(value => this.measures = value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    console.log(this.exercise);
    this.exercisesService.postExercise(this.exercise);
  }

}
