import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../data.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-past-handoffs',
  templateUrl: './past-handoffs.component.html',
  styleUrl: './past-handoffs.component.css',
})
export class PastHandoffsComponent implements OnInit {
  pastHandoffs: any[];
  displayedColumns = ['id', 'city', 'priority', 'name', 'entry', 'date', 'edit'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // displayedColumns: Iterable<string>;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getEntries().subscribe(
      handoffs => {
        this.pastHandoffs = handoffs;
        this.dataSource = new MatTableDataSource<any>(this.pastHandoffs);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  getEntry(id) {
    this.dataService.getEntry(id).subscribe(
      entry => {
        console.log(entry)
      }
    )
  }

  transformPriority(priority: number): string {
    switch (priority) {
      case 1:
        return 'Low';
      case 2:
        return 'Medium';
      case 3:
        return 'High';
    }
  }

}
