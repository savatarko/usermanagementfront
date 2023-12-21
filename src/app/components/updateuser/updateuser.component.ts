import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserDto} from "../../model";
import {BackService} from "../../services/back.service";

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  user:UserDto
  can_read_users:boolean
  can_create_users:boolean
  can_update_users:boolean
  can_delete_users:boolean
  constructor(private activatedRoute:ActivatedRoute, private service:BackService, private router:Router) {
    this.user = JSON.parse(localStorage.getItem("user")!)

    this.can_read_users = false
    this.can_create_users = false
    this.can_update_users = false
    this.can_delete_users = false

    if(this.user.permissions.indexOf("can_read_users")!= -1){
      this.can_read_users = true
    }
    if(this.user.permissions.indexOf("can_create_users")!= -1){
      this.can_create_users = true
    }
    if(this.user.permissions.indexOf("can_delete_users")!= -1) {
      this.can_delete_users = true
    }
    if(this.user.permissions.indexOf("can_update_users")!= -1) {
      this.can_update_users = true
    }
  }

  updateUser(){
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
    this.user.permissions = permissions
    this.service.updateUser(this.user).subscribe(val=>{
      localStorage.setItem("user", JSON.stringify(this.user))
      this.router.navigate(["/users"])
    })
  }

  cancel(){
    this.router.navigate(["/users"])
  }


}
