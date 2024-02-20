import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {DataService} from "../data.service";

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrl: './add-city.component.css'
})
export class AddCityComponent {
  cityName: string;

  constructor(private _snack: MatSnackBar, private dservice: DataService) {
  }

  addCity() {
    this.dservice.addCity(this.cityName).subscribe(
        resp => {
          console.log(resp);
          this._snack.open(`${this.cityName} has been saved`, '', {duration: 5000, panelClass: 'notif-success'});
        },
        error => {
          console.log(error);
          this._snack.open('Error saving...', '', {duration: 5000, panelClass: 'notif-error'});
        }
    );
  }
}
