import { Injectable } from '@angular/core';
import {LoginComponent} from "../components/login/login.component";
import {catchError, Observable} from "rxjs";
import {
  AddVacuumDto,
  CreateUserDto, ErrorsDto,
  ReadUsersDto,
  ReadVacuumDto,
  ScheduleDto,
  TokenDto,
  UserDto,
  VacuumSearchDto
} from "../model";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {ListusersComponent} from "../components/listusers/listusers.component";

@Injectable({
  providedIn: 'root'
})
export class BackService {

  basepath:string
  constructor(private httpClient:HttpClient) {
    this.basepath = "http://localhost:8080/api/"
  }

  login(source: LoginComponent):Observable<TokenDto>{
    console.log(this.basepath + 'user/login')
    return this.httpClient.post<TokenDto>(this.basepath + 'user/login', {'email':source.email, 'password':source.password})
  }

  getUsers():Observable<ReadUsersDto>{
    //const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"))
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.get<ReadUsersDto>(this.basepath + 'user/read', {'headers':header})
  }

  createUser(user:CreateUserDto):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.post(this.basepath + 'user/create', user, {'headers':header})
  }

  deleteUser(email:String):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.delete(this.basepath + 'user/remove/'+email, {'headers':header})
  }

  updateUser(user:UserDto):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.put(this.basepath + 'user/change', user, {'headers':header})
  }

  addVacuum(vacuum:AddVacuumDto):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.post(this.basepath + 'vacuum/add', vacuum, {'headers':header})
  }

  getVacuums(searchDto:VacuumSearchDto):Observable<ReadVacuumDto>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!).set("Access-Control-Allow-Origin", "*")
    return this.httpClient.post<ReadVacuumDto>(this.basepath + 'vacuum/search', searchDto, {'headers':header})
  }

  startVacuum(id:number):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.put(this.basepath + 'vacuum/start/'+id,{}, {'headers':header})
  }

  stopVacuum(id:number):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.put(this.basepath + 'vacuum/stop/'+id,{}, {'headers':header})
  }

  dischargeVacuum(id:number):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.put(this.basepath + 'vacuum/discharge/'+id,{}, {'headers':header})
  }

  removeVacuum(id:number):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.delete(this.basepath + 'vacuum/remove/'+id, {'headers':header})
  }

  scheduleVacuum(scheduleDto:ScheduleDto):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.post(this.basepath + 'vacuum/schedule', scheduleDto, {'headers':header})
  }

  getErrors():Observable<ErrorsDto>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.get<ErrorsDto>(this.basepath + 'vacuum/scheduleErrors', {'headers':header})
  }

}
