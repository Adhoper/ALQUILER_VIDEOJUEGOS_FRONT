import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
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
