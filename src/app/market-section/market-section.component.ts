import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-market-section',
  templateUrl: './market-section.component.html',
  styleUrls: ['./market-section.component.css']
})
export class MarketSectionComponent implements OnInit{
  name: string = '';
  city: number = 0;
  entry: string = '';
  priority: number = 0;
  cities: any[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getCities().subscribe(
      cities => {
        this.cities = cities;
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
    console.log(entryData);
    this.dataService.saveEntry(entryData).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    )
    this.clearFields();
  }

  clearFields(): void {
    this.name = '';
    this.city = 0;
    this.priority = 0;
    this.entry = '';
  }

}
