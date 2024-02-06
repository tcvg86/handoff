import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-section',
  templateUrl: './market-section.component.html',
  styleUrl: './market-section.component.css'
})
export class MarketSectionComponent implements OnInit{
  city1: string = '';
  city2: string = '';
  city3: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  clearFields(): void {
    this.city1 = '';
    this.city2 = '';
    this.city3 = '';
  }

}
