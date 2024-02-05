import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { ListusersComponent } from './components/listusers/listusers.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { AddvacuumComponent } from './components/addvacuum/addvacuum.component';
import { ListvacuumsComponent } from './components/listvacuums/listvacuums.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ListerrorsComponent } from './components/listerrors/listerrors.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListusersComponent,
    AdduserComponent,
    UpdateuserComponent,
    AddvacuumComponent,
    ListvacuumsComponent,
    ScheduleComponent,
    ListerrorsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
