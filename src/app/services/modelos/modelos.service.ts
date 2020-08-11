import { environment } from './../../../environments/environment.prod';
import { Modelos } from './../../models/modelos/modelos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  constructor(
    private http: HttpClient
  ) { }

  listar(id): Observable<Modelos[]> {
    return this.http.get<Modelos[]>(`${environment.apiUrl}/Model?MakeID=${id}`);
  }
}
