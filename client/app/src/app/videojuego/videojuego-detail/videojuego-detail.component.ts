import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuego-detail',
  templateUrl: './videojuego-detail.component.html',
  styleUrls: ['./videojuego-detail.component.css']
})
export class VideojuegoDetailComponent {
  
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
