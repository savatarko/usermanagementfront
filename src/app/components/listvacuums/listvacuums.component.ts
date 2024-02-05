import { Component } from '@angular/core';
import {ReadVacuumDto} from "../../model";
import {BackService} from "../../services/back.service";
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';
import * as StompJs from '@stomp/stompjs'

@Component({
  selector: 'app-listvacuums',
  templateUrl: './listvacuums.component.html',
  styleUrls: ['./listvacuums.component.css']
})
export class ListvacuumsComponent {

  /*
  id:number,
  status:string,
  name:string,
  isChanging:boolean,
  dateAdded:string
   */
  vacuums:ReadVacuumDto
  can_delete_vacuum:boolean
  can_start_vacuum:boolean
  can_stop_vacuum:boolean
  can_discharge_vacuum:boolean

  vacuumName:string
  startDate:Date
  endDate:Date

  stompClient:any

  //webSocket:WebSocket


  constructor(private service:BackService, private router:Router, public datepipe:DatePipe) {
    this.vacuums = {
      vacuums:[]
    }
    this.can_delete_vacuum = false
    this.can_start_vacuum = false
    this.can_stop_vacuum = false
    this.can_discharge_vacuum = false

    this.vacuumName = ""
    this.startDate = new Date(2023,1,1)
    this.endDate = new Date()

     // this.webSocket = new WebSocket("ws://localhost:8080/myapp")
     // this.webSocket.onmessage = (event)=>{
     //   this.loadData()
     // }

    const stompClient = new StompJs.Client({
      brokerURL: 'ws://localhost:8080/myapp',
    })

    stompClient.onConnect = (frame)=>{
      stompClient.subscribe('/topic/vacuum', (message)=>{
        this.loadData()
      })
    }


    // let ws = SockJS('ws://localhost:8080/ws')
    // this.stompClient = Stomp.over(ws)
    // const _this = this
    // this.stompClient.connect({}, function(frame:any) {
    //   _this.stompClient.subscribe('/topic/app/vacuum', function(message:any) {
    //     _this.loadData()
    //   })
    // })

    this.loadData()
  }

  loadData(){
    this.service.getUsers().subscribe(val=>{
      for(var i =0;i<val.users.length;i++){
        if(val.users[i].email === localStorage.getItem("email")){
          localStorage.setItem("permissions", val.users[i].permissions.toString())
          if(val.users[i].permissions.indexOf("can_remove_vacuum")!= -1){
            this.can_delete_vacuum = true
          }
          if(val.users[i].permissions.indexOf("can_start_vacuum")!= -1){
            this.can_start_vacuum = true
          }
          if(val.users[i].permissions.indexOf("can_stop_vacuum")!= -1) {
            this.can_stop_vacuum = true
          }
          if(val.users[i].permissions.indexOf("can_discharge_vacuum")!= -1) {
            this.can_discharge_vacuum = true
          }
        }
      }
    }, error => {
      alert("Error")
    })

    this.service.getVacuums({
      name:this.vacuumName,
      dateFrom:this.datepipe.transform(this.startDate, 'yyyy-MM-dd')!,
      dateTo:this.datepipe.transform(this.endDate, 'yyyy-MM-dd')!,
    }).subscribe(val=>{
      this.vacuums = val
    }, error => {
      alert(error)
    })
  }

  removeVacuum(id:number){
    this.service.removeVacuum(id).subscribe(val=>{
      for(var i =0;i<this.vacuums.vacuums.length;i++){
        if(this.vacuums.vacuums[i].id === id){
          this.vacuums.vacuums.splice(i,1)
          break
        }
      }
    }, error => {
      alert(error)
    })
  }

  startVacuum(id:number){
    this.service.startVacuum(id).subscribe(val=>{

    }, error => {
      alert(error)
    })
  }

  stopVacuum(id:number){
    this.service.stopVacuum(id).subscribe(val=>{

    }, error => {
      alert(error)
    })
  }

  dischargeVacuum(id:number){
    this.service.dischargeVacuum(id).subscribe(val=>{

    }, error => {
      alert(error)
    })

  }


  schedule(id:number){
    localStorage.setItem("schedule", id.toString())
    this.router.navigate(["/schedule"])
  }
}
