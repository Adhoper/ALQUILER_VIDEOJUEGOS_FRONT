import { Routes } from '@angular/router';
import { videojuegoRoutes } from './pages/videojuego/videojuego.routes';
import { pagosRoutes } from './pago/pagos/pagos.routes';

export const routes: Routes = [

    ...videojuegoRoutes,
    ...pagosRoutes,
    {
        path: 'alquiler',
        loadComponent: () => import("./pages/alquiler/alquiler.component").then(c => c.AlquilerComponent)

    },
    {
        path: 'autenticacion',
        loadComponent: () => import("./autenticacion/autenticacion/autenticacion.component").then(c => c.AutenticacionComponent)
    },
    {
        path: 'home',
        loadComponent: () => import("./pages/home/home.component").then(c => c.HomeComponent)
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    
    
];
