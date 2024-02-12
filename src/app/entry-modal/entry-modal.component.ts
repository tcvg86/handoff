import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {DataService} from "../data.service";

@Component({
  selector: 'app-entry-modal',
  template: `
    <div style="width: 500px; height: 500px; margin: 50px;">
      <h2>Edit Entry</h2>
      <form>
        <div class="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input [(ngModel)]="data.name" [value]="data.name" type="text" name="name" id="name" autocomplete="name"
                       class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                       [placeholder]="data.name">
              </div>
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
        </div>
      </form>
    </div>
  `
})
export class EntryModalComponent implements OnInit{
  cities: any = [];
  priority = [
    {"value": 1, "name": "Low"},
    {"value": 2, "name": "Medium"},
    {"value": 3, "name": "High"}
  ]
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getCities().subscribe(
      cities => {
        this.cities = cities;
      }
    )
  }
}
