import { Routes } from '@angular/router';


export const pagosRoutes: Routes = [
  {
    path: 'pago',
    loadComponent: () => import("./pagos.component").then(c => c.PagosComponent)

  },
];
