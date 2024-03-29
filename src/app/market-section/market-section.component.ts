import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-market-section',
  templateUrl: './market-section.component.html',
  styleUrls: ['./market-section.component.css']
})
export class MarketSectionComponent implements OnInit{
  name: string = 'name';
  userName: string = '';
  fullName: string = '';
  priv: string = '';
  city: number = 0;
  entry: string = '';
  priority: number = 0;
  loading: boolean = false;
  cityLoading: boolean = false;
  cities: any[];
  users: any[];

  constructor(private dataService: DataService, private _snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.getCurrentUser();
    this.getCities();
    this.getUsers();
  }

  getCurrentUser() {
    this.dataService.getCurrentUser().subscribe(
        user => {
          this.fullName = user[1] + ' ' + user[2];
          this.userName = user[3];
          this.priv = user[4];

          // this transforms the name property to the full name retrieved
          this.name = this.fullName;
        }
    )
  }

  getCities() {
    this.cityLoading = true;

    this.dataService.getCities().subscribe(
      cities => {
        this.cities = cities;
        this.cityLoading = false;
      }
    )
  }

  getUsers() {
    this.dataService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    )
  }

  saveEntry(): void {
    const entryData = {
      name: this.name,
      market_id: this.city,
      priority: this.priority,
      entry: this.entry
    }
    // console.log(entryData);
    this.loading = true;
    setTimeout(() => {
      this.dataService.saveEntry(entryData).subscribe(
        resp => {
          this.loading = false;
          this._snackbar.open('Entry Saved!', 'Close', { duration: 5000 })
          console.log(resp);
        },
        error => {
          this.loading = false;
          this._snackbar.open('An Error Occurred', 'Close', { duration: 5000 })
          console.log(error);
        }
      )
      this.clearFields();
    }, 4000);
  }

  clearFields(): void {
    this.name = this.fullName ? this.fullName : '';
    this.city = 0;
    this.priority = 0;
    this.entry = '';
  }

}
