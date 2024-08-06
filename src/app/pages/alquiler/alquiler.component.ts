import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";

@Component({
  selector: 'app-alquiler',
  standalone: true,
  imports: [HeroComponent,HeroComponent],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css'
})
export class AlquilerComponent {

}
