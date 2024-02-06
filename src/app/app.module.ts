import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolidayRequestListComponent } from './holiday-requests/components/holiday-request-list/holiday-request-list.component';
import { HolidayRequestEditComponent } from './holiday-requests/components/holiday-request-edit/holiday-request-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidayRequestListComponent,
    HolidayRequestEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
