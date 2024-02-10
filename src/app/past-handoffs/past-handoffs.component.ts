import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../data.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-past-handoffs',
  templateUrl: './past-handoffs.component.html',
  styleUrl: './past-handoffs.component.css',
})
export class PastHandoffsComponent implements OnInit {
  pastHandoffs: any[];
  displayedColumns = ['id', 'city', 'name', 'entry', 'date'];
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

}
