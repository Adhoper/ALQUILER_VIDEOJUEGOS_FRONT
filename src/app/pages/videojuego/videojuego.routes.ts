import { Routes } from '@angular/router';
import { VideojuegoComponent } from './videojuego.component';
import { DetalleAlquilerComponent } from './detalle-alquiler/detalle-alquiler.component';


export const videojuegoRoutes: Routes = [
  {
    path: 'videojuego',
    loadComponent: () => import("./videojuego.component").then(c => c.VideojuegoComponent)

  },
  {
    path: 'detalle-alquiler',
    loadComponent: () => import("./detalle-alquiler/detalle-alquiler.component").then(c => c.DetalleAlquilerComponent)

  }
];
