import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodayRoutingModule } from './today-routing.module';
import {TodayComponent} from './today.component';
import {MatPaginatorModule, MatTableModule, MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [TodayComponent],
  imports: [
    CommonModule,
    TodayRoutingModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TodayModule { }
