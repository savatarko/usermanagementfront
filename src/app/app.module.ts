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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListusersComponent,
    AdduserComponent,
    UpdateuserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
