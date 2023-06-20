import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuego-diag',
  templateUrl: './videojuego-diag.component.html',
  styleUrls: ['./videojuego-diag.component.css']
})
export class VideojuegoDiagComponent {

  constructor(){

  }
/* obtenerVideojuego(id:any){
    this.gService
    .get('videojuego',id)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:any)=>{
      console.log(data);
        this.datos=data; 
    });
   
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  } */
}
