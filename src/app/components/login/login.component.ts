import { Component } from '@angular/core';
import {BackService} from "../../services/back.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string
  password:string
  service:BackService
  message:string
  constructor(service:BackService, private router:Router) {
    this.email = ""
    this.password = ""
    this.service = service
    this.message = ""
  }
  login(){
    this.service.login(this).subscribe(val=>{
      localStorage.setItem("token", val.token)
      localStorage.setItem("email", this.email)
      this.router.navigate(["/users"])
    }, error => {
      this.message = "Invalid credentials"
    })
  }
}
