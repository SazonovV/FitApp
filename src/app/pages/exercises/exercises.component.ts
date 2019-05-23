import {Component, OnInit, ViewChild} from '@angular/core';
import {ExercisesService} from '../../services/exercises/exercises.service';
import {Exercise} from '../../interfaces/exercise';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NewExerciseComponent} from './new-exercise/new-exercise.component';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.less']
})
export class ExercisesComponent implements OnInit {
  public exercises;
  public displayedColumns: string[] = ['number', 'name', 'num_rep', 'num_try'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private exercisesService: ExercisesService, private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.exercisesService.getExercises()
      .subscribe((exercises: Exercise[]) => {
        this.exercises = new MatTableDataSource<Exercise>(exercises);
        this.exercises.paginator = this.paginator;
      });
  }

  openDialog(): void {
    this.dialog.open(NewExerciseComponent,  {width: '600px'});
  }

  onOpenExercise(exerciseId: string) {
      this.router.navigate([ 'exercises/expand', {id: exerciseId}]);
    // this.router.navigate([`exercises`, id]);
  }

}
