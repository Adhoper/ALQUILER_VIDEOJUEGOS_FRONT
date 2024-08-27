import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule,SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corregir "styleUrl" a "styleUrls"
})
export class LoginComponent implements OnInit {


  @Input() FormularioActivo: any
  @Output() Mostrar = new EventEmitter<boolean>();
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, this.customEmailOrUsernameValidator()]],
      password: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
   

  }

  onSubmit(): void {


    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {

      console.log(this.loginForm.value);


    }
  }

  CambiarFormulario() {

    let mostrarRegistrar = !this.FormularioActivo

    this.Mostrar.emit(mostrarRegistrar);
  }

  
  customEmailOrUsernameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      
      if (!value) return null; // Skip validation if the field is empty
  
      // Regular expression for email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (emailPattern.test(value)) {
        // Optionally, add more email validation logic here
        return null; // Valid email
      } else {
        // Validate as username (e.g., alphanumeric and 3-15 characters)
        const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;
        return !usernamePattern.test(value) ? { 'invalidUsername': true } : null;
      }
    };
  }
  
}
