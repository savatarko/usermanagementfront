import { Injectable } from '@angular/core';
import {LoginComponent} from "../components/login/login.component";
import {catchError, Observable} from "rxjs";
import {CreateUserDto, ReadUsersDto, TokenDto, UserDto} from "../model";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {ListusersComponent} from "../components/listusers/listusers.component";

@Injectable({
  providedIn: 'root'
})
export class BackService {

  basepath:string
  constructor(private httpClient:HttpClient) {
    this.basepath = "http://localhost:8080/api/user"
  }

  login(source: LoginComponent):Observable<TokenDto>{
    return this.httpClient.post<TokenDto>(this.basepath + '/login', {'email':source.email, 'password':source.password})
  }

  getUsers(source: ListusersComponent):Observable<ReadUsersDto>{
    //const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"))
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.get<ReadUsersDto>(this.basepath + '/read', {'headers':header})
  }

  createUser(user:CreateUserDto):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.post(this.basepath + '/create', user, {'headers':header})
  }

  deleteUser(email:String):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.delete(this.basepath + '/remove/'+email, {'headers':header})
  }

  updateUser(user:UserDto):Observable<any>{
    const header = new HttpHeaders().set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.put(this.basepath + '/change', user, {'headers':header})
  }

}
