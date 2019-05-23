import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [HeaderComponent, SideBarComponent],
})
export class SharedModule { }
