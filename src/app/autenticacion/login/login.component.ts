import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corregir "styleUrl" a "styleUrls"
})
export class LoginComponent implements OnInit {


  @Input() FormularioActivo: any
  @Output() Mostrar = new EventEmitter<boolean>();

  ngOnInit(): void {
   
    //console.log(this.FormularioActivo);
  }

  CambiarFormulario() {

    let mostrarRegistrar = !this.FormularioActivo

    this.Mostrar.emit(mostrarRegistrar);
  }
}
