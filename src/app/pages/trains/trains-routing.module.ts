import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainsComponent} from './trains.component';
import {TrainPageComponent} from './train-page/train-page.component';

const routes: Routes = [
  {
    path: '',
    component: TrainsComponent,
    pathMatch: 'full'
  },
  {
    path: 'expand',
    component: TrainPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainsRoutingModule { }
