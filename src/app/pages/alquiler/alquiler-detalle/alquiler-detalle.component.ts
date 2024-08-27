import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alquiler-detalle',
  standalone: true,
  imports: [],
  templateUrl: './alquiler-detalle.component.html',
  styleUrl: './alquiler-detalle.component.css'
})
export class AlquilerDetalleComponent {


  constructor(public dialogRef: MatDialogRef<AlquilerDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
  }

}
