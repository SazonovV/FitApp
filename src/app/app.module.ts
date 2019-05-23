import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import { RouterModule} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
