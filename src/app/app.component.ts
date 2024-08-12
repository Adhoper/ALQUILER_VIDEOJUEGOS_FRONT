import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,CommonModule,FooterComponent]
})
export class AppComponent {

  showHeader: boolean = true;

  constructor(private router: Router) {

    this.router.events.subscribe(() => {
      // Ocultar el header si la ruta es '/login' o cualquier otra ruta de login
      this.showHeader = !this.router.url.includes('/autenticacion');
    });
  }

  title = 'ALQUILER_VIDEOJUEGOS_FRONT';
}
