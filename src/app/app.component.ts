import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from './shared/shared.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,FooterComponent,SharedModule]
})
export class AppComponent implements OnInit, AfterViewChecked {

  showHeader: boolean = true;

  constructor(private router: Router) {

    this.router.events.subscribe(() => {
      // Ocultar el header si la ruta es '/login' o cualquier otra ruta de login
      this.showHeader = !this.router.url.includes('/autenticacion');
    });
  }

  
  ngAfterViewChecked(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 190); // Retrasar el scroll unos milisegundos
      }
    });
  }
  



  
  ngOnInit(): void {

  }

  title = 'ALQUILER_VIDEOJUEGOS_FRONT';
}
