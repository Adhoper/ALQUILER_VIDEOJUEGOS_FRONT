import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from "../register/register.component";
import { CommonModule } from '@angular/common';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import jwt_decode, { jwtDecode } from 'jwt-decode'; // Importa jwt_decode para manejar los tokens
import { AutenticacionEstadoFormService } from '../../services/autenticacion-estado-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent],
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css'] // Nota: styleUrl corregido a styleUrls
})
export class AutenticacionComponent implements OnInit {

  MostrarLogin: boolean = true;
  successfulLogin: any;
  successfulRegister: any;

  constructor(private accountService: AccountService, private router: Router
    ,private autenticacionEstado:AutenticacionEstadoFormService
  ) { }

  ngOnInit(): void {
    // Verificar el token al cargar el componente
    this.verificarToken();

    this.autenticacionEstado.showLogin$.subscribe(showLogin => {
      this.MostrarLogin = showLogin;
    });

  }

  verificarToken(): void {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { exp } = jwtDecode(token) as any;
        const currentTime = Math.floor(Date.now() / 1000);
        if (exp > currentTime) {
          this.router.navigate(['/home']); // Redirige al usuario si el token es válido
        } else {
          localStorage.removeItem('token'); // Elimina el token si ha expirado
        }
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        localStorage.removeItem('token'); // Elimina el token si es inválido
      }
    }
  }

  CambiarFormulario(ev: boolean): void {
    this.MostrarLogin = ev;
  }

  Registrarse(ev: any): void {
    console.log(ev);

    const UsuarioDTO ={
      usuario: ev.usuario,
      nombre: ev.nombre,
      apellido: ev.apellido,
      correo: ev.correo,
      contrasena: ev.password,
      direccion: ev.direccion,
      telefono: ev.telefono,
    }


    this.accountService.Registrarse(UsuarioDTO).subscribe((res:any) =>{
      console.log(res);

      this.successfulRegister = {
        successful: res.singleData.estatusRegistro,
        message: res.singleData.result
      }

      if(res.successful){

        // Encuentra el índice del primer y último signo de exclamación
        const primerExclamacionIndex = res.message.indexOf('¡');
        const ultimaExclamacionIndex = res.message.lastIndexOf('!');

        // Extrae las partes del mensaje
        const parteConExclamacion = res.message.substring(0, ultimaExclamacionIndex + 1);
        const parteResto = res.message.substring(ultimaExclamacionIndex + 1).trim();
        
        Swal.fire({
          icon: 'success',
          title: parteConExclamacion,
          text:parteResto,
          showConfirmButton: false,
          width: '500px', 
          padding: '2em',     
          timer: 5000,
          willClose: () => {
            window.location.reload();
          }
        });

      }
      else if(res.singleData.estatusRegistro === "ERROR"){

        Swal.fire({
          title: "Ha ocurrido un error",
          text: res.singleData.result,
          icon: "error",
          width: '500px',      
          padding: '2em', 
        });
      }
    })

    
  }

  IniciarSesion(ev: any): void {
    this.accountService.Loguearse(ev).subscribe((res: any) => {
      console.log(res);

      this.successfulLogin = {
        successful: res.successful,
        message: res.message
      }

      if (res.successful) {
        localStorage.setItem('token', res.singleData.token);
        localStorage.setItem('User', res.singleData.usuario);
        this.router.navigate(['/home']);
      }
      else{

      }
    });
  }
}
