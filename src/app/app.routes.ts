import { Routes } from '@angular/router';
import { videojuegoRoutes } from './pages/videojuego/videojuego.routes';
import { pagosRoutes } from './pago/pagos/pagos.routes';
import { alquilerRoutes } from './pages/alquiler/alquiler.routes';
import { configuracionRoutes } from './pages/configuracion/configuracion.routes';

export const routes: Routes = [

    ...videojuegoRoutes,
    ...pagosRoutes,
    ...alquilerRoutes,
    ...configuracionRoutes,
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
