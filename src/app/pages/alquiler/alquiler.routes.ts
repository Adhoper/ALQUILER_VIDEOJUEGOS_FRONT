import { Routes } from '@angular/router';


export const alquilerRoutes: Routes = [
  {
    path: 'alquiler',
    loadComponent: () => import("./alquiler.component").then(c => c.AlquilerComponent)

},
];
