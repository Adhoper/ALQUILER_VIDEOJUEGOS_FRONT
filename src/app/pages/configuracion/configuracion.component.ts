import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [HeroComponent, HeaderComponent],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {

}
