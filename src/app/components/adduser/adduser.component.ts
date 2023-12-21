import { Component } from '@angular/core';
import {CreateUserDto} from "../../model";
import {BackService} from "../../services/back.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  name:string
  surname:string
  email:string
  password:string
  can_read_users:boolean
  can_create_users:boolean
  can_update_users:boolean
  can_delete_users:boolean
  constructor(private service:BackService, private router:Router) {
    this.name = ""
    this.surname = ""
    this.email = ""
    this.password = ""
    this.can_read_users = true
    this.can_create_users = false
    this.can_update_users = false
    this.can_delete_users = false
  }

  addUser(){
    var permissions:string[] = []
    if(this.can_read_users){
      permissions.push("can_read_users")
    }
    if(this.can_create_users){
      permissions.push("can_create_users")
    }
    if(this.can_update_users){
      permissions.push("can_update_users")
    }
    if(this.can_delete_users){
      permissions.push("can_delete_users")
    }
    var user = {
      name:this.name,
      surname:this.surname,
      email:this.email,
      password:this.password,
      permissions:permissions
    }as CreateUserDto

    this.service.createUser(user).subscribe(val=>{
      this.router.navigate(["/users"])
    })
  }

  cancel(){
    this.router.navigate(["/users"])
  }

}
