import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Exercise} from '../../../interfaces/exercise';
import {TrainsService} from '../../../services/trains/trains.service';
import {Train} from '../../../interfaces/train';
import {AddFriendToTrainComponent} from '../add-friend-to-train/add-friend-to-train.component';
import {AddExerciseToTrainComponent} from '../add-exercise-to-train/add-exercise-to-train.component';

@Component({
  selector: 'app-train-page',
  templateUrl: './train-page.component.html',
  styleUrls: ['./train-page.component.less']
})
export class TrainPageComponent implements OnInit {
  public exercises;
  public displayedColumns: string[] = ['number', 'name', 'num_rep', 'num_try', 'delete'];
  public userId = '';
  public exerciseId = '';
  private trainId: string;
  private trainInfo: Train;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainsService: TrainsService, private router: Router,
              public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.trainId = params.id;
      this.trainsService.getExpandTrain(params.id)
      .subscribe((exercises: Exercise[]) => {
        this.exercises = new MatTableDataSource<Exercise>(exercises);
        this.exercises.paginator = this.paginator;
      });
      this.trainsService.getTrainInfo(params.id).subscribe(value => this.trainInfo = value);
    });

  }

  deleteExercise(id: string): void {
    event.stopPropagation();
    this.trainsService.deleteExerciseFromTrain(this.trainId, id).subscribe(() =>
      this.trainsService.getExpandTrain(this.trainId)
      .subscribe((exercises: Exercise[]) => {
        this.exercises = new MatTableDataSource<Exercise>(exercises);
        this.exercises.paginator = this.paginator;
      }));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddExerciseToTrainComponent,  {
      width: '600px',
      data: {exerciseId: this.exerciseId}
    });

    dialogRef.afterClosed().subscribe((result) =>
      this.trainsService.postNewExerciseInTrain(this.trainId, result)
        .subscribe(() =>       this.trainsService.getExpandTrain(this.trainId)
          .subscribe((exercises: Exercise[]) => {
            this.exercises = new MatTableDataSource<Exercise>(exercises);
            this.exercises.paginator = this.paginator;
          })));
  }
  openAddFriendToTrain(): void {
    const dialogRef = this.dialog.open(AddFriendToTrainComponent, {
      width: '600px',
      data: {userId: this.userId}
    });

    dialogRef.afterClosed().subscribe((result) => this.trainsService.shareTrain(result, this.trainId));
  }

  onOpenExercise(exerciseId: string) {
    this.router.navigate([ 'exercises/expand', {id: exerciseId}]);
  }



}
