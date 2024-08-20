import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";
import { SharedModule } from '../../shared/shared.module';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [SharedModule,HeroComponent],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {

  constructor(private router: Router) {
        
  }

  Pagado(){

    Swal.fire({
      icon: "success",
      title: "Haz realizado el pago correctamente",
      text: 'Te hemos enviado el codigo del juego a tu correo electronico.',
      showConfirmButton: false,
      timer: 6000,
      willClose: () => {
        this.router.navigate(['/home']);
      }
    });
    
  }

}
