import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {TrainsService} from '../../../services/trains/trains.service';

@Component({
  selector: 'app-new-train',
  templateUrl: './new-train.component.html',
  styleUrls: ['./new-train.component.less']
})
export class NewTrainComponent implements OnInit {
  public name: string;
  public date: Date;
  public repeat: number;

  constructor(public dialogRef: MatDialogRef<NewTrainComponent>,
              private trainsService: TrainsService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    this.trainsService.postNewTrain(this.name, this.date, this.repeat).subscribe(() => this.dialogRef.close());
  }

}
