import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { VideojuegoAllDataSource, VideojuegoAllItem } from './videojuego-all-datasource';

@Component({
  selector: 'app-videojuego-all',
  templateUrl: './videojuego-all.component.html',
  styleUrls: ['./videojuego-all.component.css']
})
export class VideojuegoAllComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<VideojuegoAllItem>;
  dataSource: VideojuegoAllDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new VideojuegoAllDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
