import { Routes } from '@angular/router';


export const configuracionRoutes: Routes = [
  {
    path: 'configuracion',
    loadComponent: () => import("./configuracion.component").then(c => c.ConfiguracionComponent)

  },
];
