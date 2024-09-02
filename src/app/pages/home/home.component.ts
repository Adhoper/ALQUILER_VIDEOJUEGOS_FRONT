import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { SharedModule } from '../../shared/shared.module';
import { VideojuegoService } from '../../services/videojuego.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  isLoggedIn: boolean = false;

  constructor(private videojuegoService:VideojuegoService,
    private authService:AuthService
  ) {}

  ngAfterViewInit(): void {
    //window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    //window.scrollTo(0, 0);

    this.isLoggedIn = this.authService.isAuthenticated();

    this.videojuegoService.ObtenerAlquileres().subscribe((res:any) =>{
      //console.log(res);
    })
  }

}
