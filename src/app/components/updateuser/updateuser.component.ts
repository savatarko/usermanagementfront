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
  can_search_vacuum:boolean
  can_add_vacuum:boolean
  can_start_vacuum:boolean
  can_stop_vacuum:boolean
  can_discharge_vacuum:boolean
  can_remove_vacuum:boolean
  constructor(private activatedRoute:ActivatedRoute, private service:BackService, private router:Router) {
    this.user = JSON.parse(localStorage.getItem("user")!)

    this.can_read_users = false
    this.can_create_users = false
    this.can_update_users = false
    this.can_delete_users = false
    this.can_search_vacuum = false
    this.can_add_vacuum = false
    this.can_start_vacuum = false
    this.can_stop_vacuum = false
    this.can_discharge_vacuum = false
    this.can_remove_vacuum = false

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
    if(this.user.permissions.indexOf("can_search_vacuum")!= -1) {
      this.can_search_vacuum = true
    }
    if(this.user.permissions.indexOf("can_add_vacuum")!= -1) {
      this.can_add_vacuum = true
    }
    if(this.user.permissions.indexOf("can_start_vacuum")!= -1) {
      this.can_start_vacuum = true
    }
    if(this.user.permissions.indexOf("can_stop_vacuum")!= -1) {
      this.can_stop_vacuum = true
    }
    if(this.user.permissions.indexOf("can_discharge_vacuum")!= -1) {
      this.can_discharge_vacuum = true
    }
    if(this.user.permissions.indexOf("can_remove_vacuum")!= -1) {
      this.can_remove_vacuum = true
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
    if(this.can_search_vacuum){
      permissions.push("can_search_vacuum")
    }
    if(this.can_add_vacuum){
      permissions.push("can_add_vacuum")
    }
    if(this.can_start_vacuum){
      permissions.push("can_start_vacuum")
    }
    if(this.can_stop_vacuum){
      permissions.push("can_stop_vacuum")
    }
    if(this.can_discharge_vacuum){
      permissions.push("can_discharge_vacuum")
    }
    if(this.can_remove_vacuum){
      permissions.push("can_remove_vacuum")
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
