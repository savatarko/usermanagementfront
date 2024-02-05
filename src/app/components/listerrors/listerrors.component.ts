import { Component } from '@angular/core';
import {ErrorDto, ErrorsDto} from "../../model";
import {BackService} from "../../services/back.service";

@Component({
  selector: 'app-listerrors',
  templateUrl: './listerrors.component.html',
  styleUrls: ['./listerrors.component.css']
})
export class ListerrorsComponent {

  errors:ErrorsDto

  constructor(private service:BackService) {
    this.errors = {
      errors:[]
    }
    this.service.getErrors().subscribe(val=>{
      this.errors = val
    })
  }
}
