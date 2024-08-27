import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { SharedModule } from '../shared.module';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [HeroSectionComponent,CommonModule, RouterModule]
})
export class HeaderComponent implements OnInit {

    componenteActivo: any;

    constructor(public router: Router) {}

    ngOnInit(): void {
        //console.log(this.router.config);

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
          ).subscribe((event: any) => {
            this.componenteActivo = this.getComponentFromRoute(event.url)
            //console.log(Object.keys(this.componenteActivo));

            this.componenteActivo === undefined ? this.componenteActivo = 'home': this.componenteActivo = this.componenteActivo
            
          });
        }
      
        private getComponentFromRoute(url: string): string {
          // Obtener el nombre del componente a partir de la URL de la ruta
          const componentName = url.split('/').filter(segment => segment !== '')[0];
          return componentName;
        }
    }
