import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports:[CommonModule,SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, OnChanges {
  @Input() FormularioActivo: any
  @Input() SuccessfullRegister:any
  @Output() Mostrar = new EventEmitter<boolean>();
  @Output() RegisterForm = new EventEmitter<boolean>();
  registerForm: FormGroup;


  
  constructor(private fb: FormBuilder) {
   
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordEqual: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]]
    }); 
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.SuccessfullRegister);
  }

  ngOnInit(): void {
   
    //console.log(this.FormularioActivo);
  }

  CambiarFormulario() {

    let mostrarRegistrar = !this.FormularioActivo

    this.Mostrar.emit(mostrarRegistrar);
  }

  onSubmit(): void {


    console.log(this.registerForm.valid);
    if (this.registerForm.valid) {
      this.RegisterForm.emit(this.registerForm.value)

    }
  }

}
