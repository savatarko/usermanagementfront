import { Component } from '@angular/core';
import {BackService} from "../../services/back.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  start:boolean
  stop:boolean
  discharge:boolean
  id:number

  date:Date

  constructor(private service:BackService, private router:Router) {
    this.start = true
    this.stop = false
    this.discharge = false
    this.date= new Date()
    this.id = parseInt(localStorage.getItem("schedule")!)
  }

  submit(){
    var action = ""
    if(this.start){
      action = "ON"
    }
    if(this.stop){
      action = "OFF"
    }
    if(this.discharge){
      action = "DISCHARGING"
    }
    this.service.scheduleVacuum({usisivacid: this.id, status:action, time:this.date, jwt:localStorage.getItem('token')!}).subscribe(val=>{
      this.router.navigate(["/vacuum"])
    })
  }
  cancel(){
    this.router.navigate(["/vacuum"])
  }

  click1(){
    this.start = true
    this.stop = false
    this.discharge = false
  }

  click2(){
    this.start = false
    this.stop = true
    this.discharge = false
  }

  click3(){
    this.start = false
    this.stop = false
    this.discharge = true
  }
}
