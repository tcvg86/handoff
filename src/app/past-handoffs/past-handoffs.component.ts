import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-past-handoffs',
  templateUrl: './past-handoffs.component.html',
  styleUrl: './past-handoffs.component.css'
})
export class PastHandoffsComponent implements OnInit {
  pastHandoffs: any[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getEntries().subscribe(
      handoffs => {
        this.pastHandoffs = handoffs;
      }
    )
  }

}
