import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'videojuego',
        loadComponent: () => import("./pages/videojuego/videojuego.component").then(c => c.VideojuegoComponent)
    },
    {
        path: 'alquiler',
        loadComponent: () => import("./pages/alquiler/alquiler.component").then(c => c.AlquilerComponent)
    },
    {
        path: 'login',
        loadComponent: () => import("./autenticacion/login/login.component").then(c => c.LoginComponent)
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
