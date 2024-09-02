import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { SharedModule } from '../shared.module';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AutenticacionEstadoFormService } from '../../services/autenticacion-estado-form.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [HeroSectionComponent,CommonModule, RouterModule]
})
export class HeaderComponent implements OnInit {

    componenteActivo: any;
    isLoggedIn: boolean = false;
    user: any;

    constructor(public router: Router,
      private authService:AuthService
      ,private autenticacionEstado: AutenticacionEstadoFormService
    ) {}

    ngOnInit(): void {

      this.isLoggedIn = this.authService.isAuthenticated();
      this.user = this.authService.GetUserInfo()

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
          ).subscribe((event: any) => {
            this.componenteActivo = this.getComponentFromRoute(event.url)
            //console.log(Object.keys(this.componenteActivo));

            this.componenteActivo === undefined ? this.componenteActivo = 'home': this.componenteActivo = this.componenteActivo
            
          });
        }


        RegisterOrLogin(param:boolean){

          this.autenticacionEstado.setShowLogin(param);
        }
      
        private getComponentFromRoute(url: string): string {
          // Obtener el nombre del componente a partir de la URL de la ruta
          const componentName = url.split('/').filter(segment => segment !== '')[0];
          return componentName;
        }

        logout(){
          localStorage.removeItem('token');
          localStorage.removeItem('User');
          window.location.reload()
          this.isLoggedIn = false;
          
        }

        capitalizeFirstLetter(str: string): string {
          if (str.length === 0) return str; // Retorna el string vacío si la longitud es 0
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
        
    }
