import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodayComponent} from './today.component';

const routes: Routes = [
  {  path: '', component: TodayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayRoutingModule { }
