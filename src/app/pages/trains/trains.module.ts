import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainsRoutingModule } from './trains-routing.module';
import { TrainsComponent } from './trains.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import { TrainPageComponent } from './train-page/train-page.component';
import { NewTrainComponent } from './new-train/new-train.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddFriendToTrainComponent } from './add-friend-to-train/add-friend-to-train.component';
import { AddExerciseToTrainComponent } from './add-exercise-to-train/add-exercise-to-train.component';

@NgModule({
  declarations: [TrainsComponent, TrainPageComponent, NewTrainComponent, AddFriendToTrainComponent, AddExerciseToTrainComponent],
  imports: [
    CommonModule,
    TrainsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  entryComponents: [NewTrainComponent, AddFriendToTrainComponent, AddExerciseToTrainComponent],
})
export class TrainsModule { }
