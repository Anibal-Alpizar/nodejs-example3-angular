import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GenericService } from 'src/app/share/generic.service';

@Component({
  selector: 'app-videojuego-index',
  templateUrl: './videojuego-index.component.html',
  styleUrls: ['./videojuego-index.component.css'],
})
export class VideojuegoIndexComponent {
  datos: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private gServices: GenericService) {
    this.listVideoJuegos();
  }
  listVideoJuegos() {
    this.gServices
      .list('videojuego')
      .pipe(takeUntil(this.destroy$))
      .subscribe((dato) => {
        this.datos = dato;
      });
  }
  detailVideojuego(id: number) {}
}
