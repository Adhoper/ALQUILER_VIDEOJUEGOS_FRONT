import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";

@Component({
  selector: 'app-videojuego',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css'
})
export class VideojuegoComponent {

}
