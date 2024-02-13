import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  firstName: string = '';
  userName: string = '';
  priv: string = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getCurrentUser()
  }

  getCurrentUser() {
    this.dataService.getCurrentUser().subscribe(
        user => {
          this.firstName = user[1];
          this.userName = user[3];
          this.priv = user[4];
        }
    )
  }
}
