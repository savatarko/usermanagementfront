import { Component } from '@angular/core';
import {BackService} from "../../services/back.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addvacuum',
  templateUrl: './addvacuum.component.html',
  styleUrls: ['./addvacuum.component.css']
})
export class AddvacuumComponent {

  name:string

  constructor(private service:BackService, private router:Router) {
    this.name = ""
  }

  addVacuum() {
    this.service.addVacuum(this).subscribe(val=>{
      this.router.navigate(["/vacuums"])
    }, error => {
      alert("Error")
    })
  }
}
