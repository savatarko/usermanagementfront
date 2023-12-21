import { Component } from '@angular/core';
import {ReadUsersDto, UserDto} from "../../model";
import {BackService} from "../../services/back.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent {
  users: ReadUsersDto
  can_list_users:boolean = false
  can_create_users:boolean = false
  can_edit_users:boolean = false
  can_delete_users:boolean = false

  message:string = ""
  constructor(private service:BackService, private router:Router) {
    this.users = {
      users:[]
    }
    service.getUsers(this).subscribe(val=>{
      this.users = val
      for(var i =0;i<this.users.users.length;i++){
        if(this.users.users[i].email === localStorage.getItem("email")){
          localStorage.setItem("permissions", this.users.users[i].permissions.toString())
          if(this.users.users[i].permissions.indexOf("can_read_users")!= -1){
            this.can_list_users = true
          }
          if(this.users.users[i].permissions.indexOf("can_create_users")!= -1){
            this.can_create_users = true
          }
          if(this.users.users[i].permissions.indexOf("can_delete_users")!= -1) {
            this.can_delete_users = true
          }
          if(this.users.users[i].permissions.indexOf("can_update_users")!= -1) {
            this.can_edit_users = true
          }
        }
      }
    }, error => {
      this.message = "no access to user data"
    })
  }

  addUser(){
    this.router.navigate(["/adduser"])
  }

  logout(){
    localStorage.clear()
    this.router.navigate(["/login"])
  }

  deleteUser(email:string){
    this.service.deleteUser(email).subscribe(val=>{
      for(var i =0;i<this.users.users.length;i++){
        if(this.users.users[i].email === email){
          this.users.users.splice(i,1)
          break
        }
      }
    })
  }

  updateUser(user:UserDto){
    localStorage.setItem("user", JSON.stringify(user))
    this.router.navigate(["/updateuser"])
  }
}
