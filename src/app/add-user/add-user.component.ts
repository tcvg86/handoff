import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import {DataService} from "../data.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  firstName: string;
  lastName: string;
  userName: string;
  userType: string = 'user';
  constructor(private _snackbar: MatSnackBar, private dservice: DataService) {
  }

  generateUserName() {
    const lastNamePrefix = this.lastName.substring(0, 4).toLowerCase();
    const firstNamePrefix = this.firstName.substring(0, 3).toLowerCase();
    this.userName = lastNamePrefix + firstNamePrefix;
  }

  onFirstNameChange() {
    this.generateUserName();
  }

  onLastNameChange() {
    this.generateUserName();
  }

  createUser() {
    const entryData = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      userType: this.userType
    }

    // this.dservice.addUser(entryData).subscribe(
    //     resp => {
    //       this._snackbar.open('User Created', '', {duration: 5000, panelClass: 'notif-success'});
    //     },
    //     error => {
    //       this._snackbar.open('An error occurred', '', {duration: 5000, panelClass: 'notif-error'})
    //     }
    // )

  }

}
