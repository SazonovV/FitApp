import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import {FriendsComponent} from './friends.component';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {NewFriendsComponent} from './new-friends/new-friends.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [FriendsComponent, NewFriendsComponent],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FriendsModule { }
