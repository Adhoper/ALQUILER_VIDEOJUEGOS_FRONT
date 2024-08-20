import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { MatDialog } from '@angular/material/dialog';
import { AlquilerComponent } from '../../alquiler/alquiler.component';

@Component({
  selector: 'app-detalle-alquiler',
  standalone: true,
  imports: [SharedModule,HeroComponent],
  templateUrl: './detalle-alquiler.component.html',
  styleUrl: './detalle-alquiler.component.css'
})
export class DetalleAlquilerComponent {

  cantidad: number = 1;

  
  constructor(private matDialog: MatDialog ) {
    
  }


  decreaseQuantity() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  increaseQuantity() {
    this.cantidad++;
  }
  
}
