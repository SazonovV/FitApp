import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FriendsComponent} from './friends.component';
import {NewFriendsComponent} from './new-friends/new-friends.component';

const routes: Routes = [
  {
    path: '',
    component: FriendsComponent,
  },
  {
    path: 'new-friends',
    component: NewFriendsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
