import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegoIndexComponent } from './videojuego-index/videojuego-index.component';
import { VideojuegoAllComponent } from './videojuego-all/videojuego-all.component';
import { VideojuegoDetailComponent } from './videojuego-detail/videojuego-detail.component';

const routes: Routes = [
  {path:'videojuego', component: VideojuegoIndexComponent},

  {path:'videojuego/all', component: VideojuegoAllComponent},

  {path:'videojuego/:id', component: VideojuegoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideojuegoRoutingModule { }
