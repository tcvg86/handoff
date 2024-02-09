import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-market-section',
  templateUrl: './market-section.component.html',
  styleUrls: ['./market-section.component.css']
})
export class MarketSectionComponent implements OnInit{
  name: string = '';
  market: number = 0;
  entry: string = '';
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
    console.log(this.name, this.market, this.entry);
    this.clearFields();
  }

  clearFields(): void {
    this.name = '';
    this.market = 0;
    this.entry = '';
  }

}
