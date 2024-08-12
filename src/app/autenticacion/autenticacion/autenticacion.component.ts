import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from "../register/register.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [CommonModule,LoginComponent, RegisterComponent],
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent implements OnInit {


  MostrarLogin:boolean = true

  constructor() {
    
  }

  ngOnInit(): void {

  }

  CambiarFormulario(ev:boolean){

    //console.log(ev);

    this.MostrarLogin = ev
    
  }

}
