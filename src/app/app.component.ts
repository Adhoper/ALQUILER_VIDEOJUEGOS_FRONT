import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
export class AppComponent implements OnInit {

  showHeader: boolean = true;

  constructor(private router: Router) {

    this.router.events.subscribe(() => {
      // Ocultar el header si la ruta es '/login' o cualquier otra ruta de login
      this.showHeader = !this.router.url.includes('/autenticacion');
    });
  }
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  title = 'ALQUILER_VIDEOJUEGOS_FRONT';
}
