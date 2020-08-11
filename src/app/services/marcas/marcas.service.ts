import { environment } from './../../../environments/environment';
import { Marcas } from './../../models/marcas/marcas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Marcas[]> {
    return this.http.get<Marcas[]>(`${environment.apiUrl}/Make`);
  }
}
