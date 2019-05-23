import {Component, OnInit, ViewChild} from '@angular/core';
import {TrainsService} from '../../services/trains/trains.service';
import {Train} from '../../interfaces/train';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {ExercisesService} from '../../services/exercises/exercises.service';
import {Router} from '@angular/router';
import {Exercise} from '../../interfaces/exercise';
import {NewExerciseComponent} from '../exercises/new-exercise/new-exercise.component';
import {NewTrainComponent} from './new-train/new-train.component';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.less']
})
export class TrainsComponent implements OnInit {
  public trains;
  public displayedColumns = ['number', 'name', 'date'];
  public noDate = '0001-01-01T00:00:00Z';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainsService: TrainsService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.initTrainsTable();
  }

  initTrainsTable(): void {
    this.trainsService.getTrains().subscribe((value: Train[]) => {
      this.trains = new MatTableDataSource<Train>(value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      this.trains.paginator = this.paginator;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTrainComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(() => this.initTrainsTable());
  }

  onOpenExercise(trainId: string) {
    this.router.navigate([ 'trains/expand', {id: trainId}]);
    // this.router.navigate([`exercises`, id]);
  }

}
