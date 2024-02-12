import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {DataService} from "../data.service";

@Component({
  selector: 'app-entry-modal',
  template: `
    <div style="width: 500px; height: 600px; margin: 50px;">
      <h2 class="mt-2">Edit Entry</h2>
      <form>
        <div class="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-b">

          <div class="sm:col-span-4">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <select [(ngModel)]="data.name" id="name" name="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option value="0">Select User</option>
              <option *ngFor="let user of users" [value]="user.name">{{ user.name }}</option>
            </select>
          </div>
          </div>

          <div class="sm:col-span-3" *ngIf="cities && cities.length > 0">
          <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Market</label>
          <div class="mt-2">
            <select [(ngModel)]="data.market_id" id="city" name="city" autocomplete="market-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option value="0">Select Market...</option>
              <option *ngFor="let market of cities" [value]="market.id">{{ market.city }}</option>
            </select>
          </div>
        </div>

          <div class="sm:col-span-4">
          <label for="priority" class="block text-sm font-medium leading-6 text-gray-900">Priority</label>
          <div class="mt-2">
            <select id="priority" [(ngModel)]="data.priority" name="priority" autocomplete="market-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option value="0">Select Priority...</option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>
        </div>

          <div class="col-span-full">
          <label for="handoff" class="block text-sm font-medium leading-6 text-gray-900">Update Details</label>
          <div class="mt-2">
            <textarea [(ngModel)]="data.entry" id="handoff" name="handoff" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">Enter details about the market you worked in...</p>
        </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button (click)="updateEntry()" [disabled]="data.name === '' || data.city === 0 || data.priority === 0 || data.entry === ''" mat-raised-button color="primary">Update</button>
          <mat-spinner *ngIf="loading" diameter="35"></mat-spinner>
        </div>
      </form>
    </div>
  `
})
export class EntryModalComponent implements OnInit {
  loading: boolean = false;
  cities: any = [];
  users: any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService) {
  }

  ngOnInit() {
    this.getCities();
    this.getUsers();
  }

  updateEntry() {
    const entryData = {
      name: this.data.name,
      market_id: parseInt(this.data.market_id),
      priority: parseInt(this.data.priority),
      entry: this.data.entry
    }
    console.log(entryData)
  }

  getCities() {
    this.dataService.getCities().subscribe(
      cities => {
        this.cities = cities;
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

}
