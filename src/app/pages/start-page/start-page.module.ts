import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import {StartPageComponent} from './start-page.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
  ]
})
export class StartPageModule { }
