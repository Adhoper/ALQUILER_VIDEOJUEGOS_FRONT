// auth-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionEstadoFormService {
  private showLoginSubject = new BehaviorSubject<boolean>(true); // Por defecto, mostrar el login
  showLogin$ = this.showLoginSubject.asObservable();

  setShowLogin(showLogin: boolean) {
    this.showLoginSubject.next(showLogin);
  }
}
