import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './exercises.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatTableModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import { ExercisePageComponent } from './exercise-page/exercise-page.component';
import {RouterModule} from '@angular/router';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ExercisesComponent, ExercisePageComponent, NewExerciseComponent],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
  ],
  entryComponents: [NewExerciseComponent],
})
export class ExercisesModule { }
