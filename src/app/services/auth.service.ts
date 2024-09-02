import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { exp } = jwtDecode(token) as any;
        const currentTime = Math.floor(Date.now() / 1000);
        return exp > currentTime; // Retorna true si el token es válido
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        return false; // Retorna false si el token es inválido
      }
    }
    return false; // Retorna false si no hay token
  }

  GetUserInfo(){
    const user = localStorage.getItem('User')
    return user;
  }
}
