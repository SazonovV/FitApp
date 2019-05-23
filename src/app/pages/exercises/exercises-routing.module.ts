import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExercisesComponent} from './exercises.component';
import {ExercisePageComponent} from './exercise-page/exercise-page.component';

const routes: Routes = [
  {
  path: '',
  component: ExercisesComponent,
  pathMatch: 'full',
},
  {
    path: 'expand',
    component: ExercisePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
