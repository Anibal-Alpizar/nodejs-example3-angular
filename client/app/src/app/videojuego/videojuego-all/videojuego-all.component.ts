import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  MatTable,
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  VideojuegoAllDataSource,
  VideojuegoAllItem,
} from './videojuego-all-datasource';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'app-videojuego-all',
  templateUrl: './videojuego-all.component.html',
  styleUrls: ['./videojuego-all.component.css'],
})
export class VideojuegoAllComponent implements AfterViewInit {
  datos: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //@ViewChild(MatTable) table!: MatTable<VideojuegoAllItem>;
  dataSource = new MatTableDataSource<any>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'precio', 'acciones'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gServices: GenericService
  ) {}

  ngAfterViewInit(): void {
    this.listVideoJuegos();
  }
  listVideoJuegos() {
    this.gServices
      .list('videojuego')
      .pipe(takeUntil(this.destroy$))
      .subscribe((dato) => {
        this.datos = dato;
        this.dataSource = new _MatTableDataSource(this.datos);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }
  gOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
