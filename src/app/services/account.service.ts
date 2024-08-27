import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  OnLogin(obj:any) : Observable<any>{
    return this.http.post('https://localhost:7043/api/Autenticacion/ValidarAutenticacion', obj);
  }
}
