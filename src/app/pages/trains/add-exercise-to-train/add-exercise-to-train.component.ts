import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ExercisesService} from '../../../services/exercises/exercises.service';
import {Exercise} from '../../../interfaces/exercise';

@Component({
  selector: 'app-add-exercise-to-train',
  templateUrl: './add-exercise-to-train.component.html',
  styleUrls: ['./add-exercise-to-train.component.less']
})
export class AddExerciseToTrainComponent implements OnInit {
  public exercises: Exercise[];

  constructor(public dialogRef: MatDialogRef<AddExerciseToTrainComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {exerciseId: string},
              private exerciseService: ExercisesService) {
  }

  ngOnInit() {
    this.exerciseService.getExercises().subscribe(value => this.exercises = value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
