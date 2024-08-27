import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {


  RUTA = 'api/VideoJuego/'
  BASE_API = 'https://localhost:7043/'

  constructor(private http: HttpClient) { }

  getQuerys(query: string) {
    const url = `${this.BASE_API}${query}`;
    return this.http.get(url);
  }

  postQuerys(query: string, data: any) {
    const url = `${this.BASE_API}${query}`;
    return this.http.post(url, data);
  }


  ObtenerVideojuegos() {
    return this.getQuerys(`${this.RUTA}get-all-videogames`);
  }

  // setPublicarCalificacion(param: any) {
  //   return this.postQuerys(`${this.RUTA}set-calification`, param);
  // }
}
