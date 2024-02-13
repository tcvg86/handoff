import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../data.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { EntryModalComponent } from "../entry-modal/entry-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-past-handoffs',
  templateUrl: './past-handoffs.component.html',
  styleUrl: './past-handoffs.component.css',
})
export class PastHandoffsComponent implements OnInit {
  priv: string = '';
  pastHandoffs: any[];
  displayedColumns = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // displayedColumns: Iterable<string>;
  constructor(private dataService: DataService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getPriv();
    this.getEntries();
  }

  getEntries() {
     this.dataService.getEntries().subscribe(
      handoffs => {
        this.pastHandoffs = handoffs;
        this.dataSource = new MatTableDataSource<any>(this.pastHandoffs);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  getPriv() {
    this.dataService.getCurrentUser().subscribe(
        user => {
          this.priv = user[4];

          if (this.priv === 'admin') {
            this.displayedColumns = ['id', 'name', 'city', 'entry', 'priority', 'date', 'edit'];
          } else {
            this.displayedColumns = ['id', 'name', 'city', 'entry', 'priority', 'date'];
          }
        }
    )



  }

  getEntry(id) {
    this.dataService.getEntry(id).subscribe(
      entry => {
        this.dialog.open(EntryModalComponent, {
          data: entry
        })
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
