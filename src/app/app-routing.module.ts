import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ListusersComponent} from "./components/listusers/listusers.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AdduserComponent} from "./components/adduser/adduser.component";
import {UpdateuserComponent} from "./components/updateuser/updateuser.component";
import {loginGuard} from "./login.guard";
import {addGuard} from "./add.guard";
import {updateGuard} from "./update.guard";
import {ListvacuumsComponent} from "./components/listvacuums/listvacuums.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {ListerrorsComponent} from "./components/listerrors/listerrors.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path:"users",
    component:ListusersComponent,
    canActivate: [loginGuard]
  },
  {
    path:"adduser",
    component:AdduserComponent,
    canActivate:[addGuard]
  },
  {
    path:"updateuser",
    component:UpdateuserComponent,
    canActivate: [updateGuard]
  },
  {
    path:"vacuum",
    component:ListvacuumsComponent
  },
  {
    path:"schedule",
    component:ScheduleComponent
  },
  {
    path:"errors",
    component:ListerrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
